import { Router } from 'express';
import { User } from '../models/User.js';

export const usersRouter = Router();

usersRouter.get('/', async (_req, res) => {
  const users = await User.find().sort({ name: 1 }).lean();

  res.json({ users });
});
