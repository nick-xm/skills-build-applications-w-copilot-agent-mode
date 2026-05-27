import { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    userEmail: { type: String, required: true },
    activityType: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    completedAt: { type: Date, required: true },
}, { timestamps: true, collection: 'activities' });
export const Activity = model('Activity', activitySchema);
