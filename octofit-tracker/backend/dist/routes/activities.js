import { Router } from 'express';
import { Activity } from '../models/Activity.js';
export const activitiesRouter = Router();
activitiesRouter.get('/', async (_req, res) => {
    const activities = await Activity.find().sort({ completedAt: -1 }).lean();
    res.json({ activities });
});
