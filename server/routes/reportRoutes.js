import express from 'express';
import { getPipelineReport } from '../controllers/reportController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/pipeline', protect, getPipelineReport);

export default router;