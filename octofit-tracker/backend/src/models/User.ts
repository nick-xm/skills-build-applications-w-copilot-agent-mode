import { Schema, model } from 'mongoose';

export interface UserDocument {
  name: string;
  email: string;
  role: string;
  fitnessGoal: string;
  teamName: string;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
    teamName: { type: String, required: true },
  },
  { timestamps: true, collection: 'users' },
);

export const User = model<UserDocument>('User', userSchema);
