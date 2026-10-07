import AuditLog from '../models/AuditLog.js';

export const getAuditLogs = async (req, res, next) => {
  try {
    const logs = await AuditLog.find().populate('user', 'name email role').sort({ createdDate: -1 }).limit(100);
    res.json(logs);
  } catch (err) {
    next(err);
  }
};