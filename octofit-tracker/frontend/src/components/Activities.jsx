import { ResourceTable } from './ResourceTable.jsx'

export function Activities() {
  return (
    <ResourceTable
      resourceName="activities"
      title="Activities"
      description="Recent logged workouts with duration, calorie, and completion details."
      columns={[
        { key: 'userEmail', label: 'User' },
        { key: 'activityType', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'completedAt', label: 'Completed' },
      ]}
    />
  )
}
