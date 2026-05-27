import { Router } from 'express';
import { Team } from '../models/Team.js';
export const teamsRouter = Router();
teamsRouter.get('/', async (_req, res) => {
    const teams = await Team.find().sort({ name: 1 }).lean();
    res.json({ teams });
});
