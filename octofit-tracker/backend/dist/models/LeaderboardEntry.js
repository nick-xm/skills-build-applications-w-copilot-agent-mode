import { Schema, model } from 'mongoose';
const leaderboardEntrySchema = new Schema({
    userEmail: { type: String, required: true },
    displayName: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
}, { timestamps: true, collection: 'leaderboard' });
export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);
