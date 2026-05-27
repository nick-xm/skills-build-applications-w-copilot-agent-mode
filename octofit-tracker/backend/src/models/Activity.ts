import { Schema, model } from 'mongoose';

export interface ActivityDocument {
  userEmail: string;
  activityType: string;
  durationMinutes: number;
  caloriesBurned: number;
  completedAt: Date;
}

const activitySchema = new Schema<ActivityDocument>(
  {
    userEmail: { type: String, required: true },
    activityType: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true, collection: 'activities' },
);

export const Activity = model<ActivityDocument>('Activity', activitySchema);
