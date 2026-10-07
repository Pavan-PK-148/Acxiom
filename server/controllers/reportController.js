import Customer from '../models/Customer.js';
import Lead from '../models/Lead.js';
import Opportunity from '../models/Opportunity.js';

export const getPipelineReport = async (req, res, next) => {
  try {
    const totalCustomers = await Customer.countDocuments();
    const totalLeads = await Lead.countDocuments();
    const totalOpportunities = await Opportunity.countDocuments();

    const opportunities = await Opportunity.find();
    const openPipeline = opportunities.reduce((acc, curr) => acc + (curr.amount || 0), 0);

    const chartData = [
      { stage: 'Qualification', amount: opportunities.filter(o => o.stage === 'Qualification').reduce((a, c) => a + c.amount, 0) },
      { stage: 'Proposal', amount: opportunities.filter(o => o.stage === 'Proposal').reduce((a, c) => a + c.amount, 0) },
      { stage: 'Negotiation', amount: opportunities.filter(o => o.stage === 'Negotiation').reduce((a, c) => a + c.amount, 0) },
      { stage: 'Won', amount: opportunities.filter(o => o.stage === 'Won').reduce((a, c) => a + c.amount, 0) },
    ];

    res.json({
      stats: {
        totalCustomers,
        totalLeads,
        totalOpportunities,
        openPipeline,
      },
      chartData,
    });
  } catch (err) {
    next(err);
  }
};