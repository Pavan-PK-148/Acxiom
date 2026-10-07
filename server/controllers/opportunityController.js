import Opportunity from '../models/Opportunity.js';
import { logAudit } from '../utils/auditLogger.js';

export const getOpportunities = async (req, res, next) => {
  try {
    const opportunities = await Opportunity.find().populate('assignedTo', 'name email');
    res.json(opportunities);
  } catch (err) {
    next(err);
  }
};

export const createOpportunity = async (req, res, next) => {
  try {
    const { name, amount, probability, expectedCloseDate, stage } = req.body;

    // Server-Side Business Validation
    if (Number(amount) <= 0) {
      return res.status(400).json({ message: 'Opportunity Amount must be greater than 0.' });
    }
    if (Number(probability) < 0 || Number(probability) > 100) {
      return res.status(400).json({ message: 'Probability must be between 0 and 100.' });
    }
    if (new Date(expectedCloseDate) < new Date().setHours(0, 0, 0, 0)) {
      return res.status(400).json({ message: 'Expected Close Date cannot be in the past.' });
    }

    const opportunity = await Opportunity.create({
      name,
      amount,
      probability,
      expectedCloseDate,
      stage: stage || 'Qualification',
      assignedTo: req.user._id,
    });

    await logAudit({ userId: req.user._id, action: 'CREATE', entityName: 'Opportunity', recordId: opportunity._id, details: `Created opportunity ${name}` });

    res.status(201).json(opportunity);
  } catch (err) {
    next(err);
  }
};