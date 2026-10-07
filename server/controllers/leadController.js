import Lead from '../models/Lead.js';
import { logAudit } from '../utils/auditLogger.js';

export const getLeads = async (req, res, next) => {
  try {
    const leads = await Lead.find().populate('assignedTo', 'name email');
    res.json(leads);
  } catch (err) {
    next(err);
  }
};

export const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, source, expectedValue } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Lead Name, email, and phone are mandatory.' });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      source: source || 'Web',
      expectedValue: expectedValue || 0,
      assignedTo: req.user._id,
    });

    await logAudit({ userId: req.user._id, action: 'CREATE', entityName: 'Lead', recordId: lead._id, details: `Created lead ${name}` });

    res.status(201).json(lead);
  } catch (err) {
    next(err);
  }
};