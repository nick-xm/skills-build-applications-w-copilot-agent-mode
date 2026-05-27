import { Router } from 'express';
import { Workout } from '../models/Workout.js';

export const workoutsRouter = Router();

workoutsRouter.get('/', async (_req, res) => {
  const workouts = await Workout.find().sort({ title: 1 }).lean();

  res.json({ workouts });
});
