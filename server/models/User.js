import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { 
  type: String, 
  enum: ['Admin', 'Manager', 'Sales Rep', 'Sales Executive'], 
  default: 'Sales Executive' 
},
    isActive: { type: Boolean, default: true },
    failedLoginCount: { type: Number, default: 0 },
    lockoutEnd: { type: Date, default: null },
  },
  { timestamps: true }
);

// Fixed: Async pre-save hook without 'next' parameter
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);