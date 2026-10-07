import AuditLog from '../models/AuditLog.js';

export const logAudit = async ({ userId, action, entityName, recordId = null, details = '' }) => {
  try {
    await AuditLog.create({
      user: userId,
      action,
      entityName,
      recordId: recordId ? String(recordId) : null,
      details,
    });
  } catch (err) {
    console.error('Audit Log failed:', err.message);
  }
};