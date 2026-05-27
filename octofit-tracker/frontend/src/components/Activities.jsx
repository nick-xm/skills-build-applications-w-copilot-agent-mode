import { ResourceTable } from './ResourceTable.jsx'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export function Activities() {
  return (
    <ResourceTable
      resourceName="activities"
      endpointUrl={activitiesEndpoint}
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
