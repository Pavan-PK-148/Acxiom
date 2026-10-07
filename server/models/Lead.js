import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    source: { type: String, default: 'Web' },
    status: { 
      type: String, 
      enum: ['New', 'Contacted', 'Qualified', 'Unqualified', 'Converted', 'Lost'], 
      default: 'New' 
    },
    expectedValue: { type: Number, default: 0 },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export default mongoose.model('Lead', leadSchema);