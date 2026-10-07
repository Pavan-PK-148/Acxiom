import FollowUp from '../models/FollowUp.js';
import { logAudit } from '../utils/auditLogger.js';

export const getFollowUps = async (req, res, next) => {
  try {
    const followups = await FollowUp.find().populate('assignedTo', 'name email');
    res.json(followups);
  } catch (err) {
    next(err);
  }
};

export const createFollowUp = async (req, res, next) => {
  try {
    const { subject, followUpDate, notes, status } = req.body;

    // Server-Side Business Validation
    if (new Date(followUpDate) < new Date().setHours(0, 0, 0, 0)) {
      return res.status(400).json({ message: 'Follow-Up Date cannot be earlier than today.' });
    }

    const followup = await FollowUp.create({
      subject,
      followUpDate,
      notes,
      status: status || 'Planned',
      assignedTo: req.user._id,
    });

    await logAudit({ userId: req.user._id, action: 'CREATE', entityName: 'FollowUp', recordId: followup._id, details: `Scheduled follow-up: ${subject}` });

    res.status(201).json(followup);
  } catch (err) {
    next(err);
  }
};