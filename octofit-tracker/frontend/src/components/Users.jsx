import { ResourceTable } from './ResourceTable.jsx'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export function Users() {
  return (
    <ResourceTable
      resourceName="users"
      endpointUrl={usersEndpoint}
      title="Users"
      description="Profiles, roles, goals, and team membership from the OctoFit API."
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'fitnessGoal', label: 'Goal' },
        { key: 'teamName', label: 'Team' },
      ]}
    />
  )
}
