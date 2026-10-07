import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: [0.01, 'Amount must be greater than 0'] },
    probability: { type: Number, required: true, min: 0, max: 100 },
    stage: { 
      type: String, 
      enum: ['Qualification', 'Proposal', 'Negotiation', 'Won', 'Lost'], 
      default: 'Qualification' 
    },
    expectedCloseDate: { type: Date, required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export default mongoose.model('Opportunity', opportunitySchema);