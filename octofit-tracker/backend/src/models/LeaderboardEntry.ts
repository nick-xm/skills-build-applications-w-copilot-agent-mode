import { Schema, model } from 'mongoose';

export interface LeaderboardEntryDocument {
  userEmail: string;
  displayName: string;
  teamName: string;
  points: number;
  rank: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    userEmail: { type: String, required: true },
    displayName: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true, collection: 'leaderboard' },
);

export const LeaderboardEntry = model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);
