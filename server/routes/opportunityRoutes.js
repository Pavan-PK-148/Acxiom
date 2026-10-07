import express from 'express';
import { getOpportunities, createOpportunity } from '../controllers/opportunityController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getOpportunities)
  .post(protect, createOpportunity);

export default router;