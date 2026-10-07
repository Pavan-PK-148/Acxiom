import Customer from '../models/Customer.js';
import { logAudit } from '../utils/auditLogger.js';

export const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find().populate('assignedTo', 'name email');
    res.json(customers);
  } catch (err) {
    next(err);
  }
};

export const createCustomer = async (req, res, next) => {
  try {
    const { name, email, phone, company } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Customer Name, email, and phone are required.' });
    }

    // Duplicate Email / Phone Verification
    const existingCustomer = await Customer.findOne({ $or: [{ email }, { phone }] });
    if (existingCustomer) {
      return res.status(409).json({ message: 'Customer with this email or phone number already exists.' });
    }

    const customer = await Customer.create({
      name,
      email,
      phone,
      company,
      assignedTo: req.user._id,
    });

    await logAudit({ userId: req.user._id, action: 'CREATE', entityName: 'Customer', recordId: customer._id, details: `Created customer ${name}` });

    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
};