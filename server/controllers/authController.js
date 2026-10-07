import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { logAudit } from '../utils/auditLogger.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'AcxiomCRM_Super_Secret_Key_2026_Campus_Select', {
    expiresIn: '8h',
  });
};

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Validation
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Name, email, password, and role are required.' });
    }

    // 2. Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // 3. Create new user 
    // (Password is passed plain here; User.js pre('save') hook handles hashing)
    const newUser = new User({
      name,
      email,
      password,
      role: role || 'Sales Executive'
    });

    await newUser.save();

    // 4. Generate Auth Token using generateToken helper
    const token = generateToken(newUser._id);

    // 5. Audit Logging (optional)
    await logAudit({ userId: newUser._id, action: 'REGISTER', entityName: 'User', details: 'User registered account' });

    res.status(201).json({
      message: 'Registration successful',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: 'Server error during registration.', error: err.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: 'User account is deactivated' });
    }

    // Check account lockout
    if (user.lockoutEnd && user.lockoutEnd > new Date()) {
      return res.status(423).json({ message: 'Account is temporarily locked due to repeated failed attempts' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      user.failedLoginCount += 1;
      if (user.failedLoginCount >= 5) {
        user.lockoutEnd = new Date(Date.now() + 15 * 60 * 1000); // Lockout for 15 mins
        await user.save();
        await logAudit({ userId: user._id, action: 'LOCKOUT', entityName: 'User', details: 'Account locked due to 5 failed attempts' });
        return res.status(423).json({ message: 'Account locked due to 5 consecutive failed attempts. Try again in 15 mins.' });
      }
      await user.save();
      await logAudit({ userId: user._id, action: 'FAILED_LOGIN', entityName: 'User', details: 'Failed password attempt' });
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Reset lockout counters upon successful login
    user.failedLoginCount = 0;
    user.lockoutEnd = null;
    await user.save();

    await logAudit({ userId: user._id, action: 'LOGIN', entityName: 'User', details: 'User logged in successfully' });

    res.json({
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  if (req.user) {
    await logAudit({ userId: req.user._id, action: 'LOGOUT', entityName: 'User', details: 'User logged out' });
  }
  res.json({ message: 'Logged out successfully' });
};