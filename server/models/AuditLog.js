import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    action: { type: String, required: true },
    entityName: { type: String, required: true },
    recordId: { type: String },
    details: { type: String },
    createdDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('AuditLog', auditLogSchema);