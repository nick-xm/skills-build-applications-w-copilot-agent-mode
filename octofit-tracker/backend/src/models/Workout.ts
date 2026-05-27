import { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  title: string;
  focusArea: string;
  difficulty: string;
  durationMinutes: number;
  suggestedForGoal: string;
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    suggestedForGoal: { type: String, required: true },
  },
  { timestamps: true, collection: 'workouts' },
);

export const Workout = model<WorkoutDocument>('Workout', workoutSchema);
