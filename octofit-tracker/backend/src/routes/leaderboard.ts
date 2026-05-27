import { Router } from 'express';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';

export const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 }).lean();

  res.json({ leaderboard });
});
