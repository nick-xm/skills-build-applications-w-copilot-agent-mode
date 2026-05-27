import { ResourceTable } from './ResourceTable.jsx'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export function Workouts() {
  return (
    <ResourceTable
      resourceName="workouts"
      endpointUrl={workoutsEndpoint}
      title="Workouts"
      description="Suggested workouts matched to athlete goals and training focus."
      columns={[
        { key: 'title', label: 'Workout' },
        { key: 'focusArea', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'suggestedForGoal', label: 'Suggested Goal' },
      ]}
    />
  )
}
