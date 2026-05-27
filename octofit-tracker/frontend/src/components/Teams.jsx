import { ResourceTable } from './ResourceTable.jsx'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export function Teams() {
  return (
    <ResourceTable
      resourceName="teams"
      endpointUrl={teamsEndpoint}
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
