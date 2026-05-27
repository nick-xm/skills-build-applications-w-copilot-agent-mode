import mongoose from 'mongoose';
import { mongoUri } from '../config/database.js';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const users = [
  {
    name: 'Maya Chen',
    email: 'maya.chen@example.com',
    role: 'runner',
    fitnessGoal: 'Improve 10K pace',
    teamName: 'Velocity Vipers',
  },
  {
    name: 'Jordan Rivera',
    email: 'jordan.rivera@example.com',
    role: 'cyclist',
    fitnessGoal: 'Build endurance',
    teamName: 'Trail Blazers',
  },
  {
    name: 'Priya Shah',
    email: 'priya.shah@example.com',
    role: 'strength athlete',
    fitnessGoal: 'Increase functional strength',
    teamName: 'Core Crushers',
  },
];

const teams = [
  {
    name: 'Velocity Vipers',
    city: 'Seattle',
    coach: 'Alex Morgan',
    memberCount: 12,
    weeklyGoalMinutes: 900,
  },
  {
    name: 'Trail Blazers',
    city: 'Portland',
    coach: 'Sam Patel',
    memberCount: 9,
    weeklyGoalMinutes: 780,
  },
  {
    name: 'Core Crushers',
    city: 'Austin',
    coach: 'Riley Brooks',
    memberCount: 15,
    weeklyGoalMinutes: 840,
  },
];

const activities = [
  {
    userEmail: 'maya.chen@example.com',
    activityType: 'Outdoor Run',
    durationMinutes: 48,
    caloriesBurned: 430,
    completedAt: new Date('2026-05-24T14:30:00Z'),
  },
  {
    userEmail: 'jordan.rivera@example.com',
    activityType: 'Hill Cycling',
    durationMinutes: 72,
    caloriesBurned: 690,
    completedAt: new Date('2026-05-25T12:15:00Z'),
  },
  {
    userEmail: 'priya.shah@example.com',
    activityType: 'Strength Circuit',
    durationMinutes: 55,
    caloriesBurned: 380,
    completedAt: new Date('2026-05-26T22:00:00Z'),
  },
];

const leaderboard = [
  {
    userEmail: 'jordan.rivera@example.com',
    displayName: 'Jordan R.',
    teamName: 'Trail Blazers',
    points: 1860,
    rank: 1,
  },
  {
    userEmail: 'maya.chen@example.com',
    displayName: 'Maya C.',
    teamName: 'Velocity Vipers',
    points: 1725,
    rank: 2,
  },
  {
    userEmail: 'priya.shah@example.com',
    displayName: 'Priya S.',
    teamName: 'Core Crushers',
    points: 1605,
    rank: 3,
  },
];

const workouts = [
  {
    title: 'Tempo Run Builder',
    focusArea: 'Cardio',
    difficulty: 'Intermediate',
    durationMinutes: 45,
    suggestedForGoal: 'Improve 10K pace',
  },
  {
    title: 'Endurance Ride Blocks',
    focusArea: 'Cycling',
    difficulty: 'Intermediate',
    durationMinutes: 60,
    suggestedForGoal: 'Build endurance',
  },
  {
    title: 'Full-Body Strength Ladder',
    focusArea: 'Strength',
    difficulty: 'Advanced',
    durationMinutes: 50,
    suggestedForGoal: 'Increase functional strength',
  },
];

async function seedDatabase() {
  console.log('Seed the octofit_db database with test data');

  await mongoose.connect(mongoUri);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const [createdUsers, createdTeams, createdActivities, createdLeaderboard, createdWorkouts] = await Promise.all([
    User.insertMany(users),
    Team.insertMany(teams),
    Activity.insertMany(activities),
    LeaderboardEntry.insertMany(leaderboard),
    Workout.insertMany(workouts),
  ]);

  console.log(`Seeded users: ${createdUsers.length}`);
  console.log(`Seeded teams: ${createdTeams.length}`);
  console.log(`Seeded activities: ${createdActivities.length}`);
  console.log(`Seeded leaderboard entries: ${createdLeaderboard.length}`);
  console.log(`Seeded workouts: ${createdWorkouts.length}`);
}

seedDatabase()
  .catch((error) => {
    console.error('Failed to seed octofit_db:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
