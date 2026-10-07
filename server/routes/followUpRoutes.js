import express from 'express';
import { getFollowUps, createFollowUp } from '../controllers/followUpController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getFollowUps)
  .post(protect, createFollowUp);

export default router;