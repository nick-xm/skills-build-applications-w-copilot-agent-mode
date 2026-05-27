import { ResourceTable } from './ResourceTable.jsx'

export function Teams() {
  return (
    <ResourceTable
      resourceName="teams"
      title="Teams"
      description="Team locations, coaches, member counts, and weekly training goals."
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'city', label: 'City' },
        { key: 'coach', label: 'Coach' },
        { key: 'memberCount', label: 'Members' },
        { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
      ]}
    />
  )
}
