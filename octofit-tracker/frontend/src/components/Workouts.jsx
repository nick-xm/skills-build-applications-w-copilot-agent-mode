import { ResourceTable } from './ResourceTable.jsx'

export function Workouts() {
  return (
    <ResourceTable
      resourceName="workouts"
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
