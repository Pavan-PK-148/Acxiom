import mongoose from 'mongoose';

const followUpSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true, trim: true },
    followUpDate: { type: Date, required: true },
    status: { 
      type: String, 
      enum: ['Planned', 'Completed', 'Missed', 'Cancelled'], 
      default: 'Planned' 
    },
    notes: { type: String, trim: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export default mongoose.model('FollowUp', followUpSchema);