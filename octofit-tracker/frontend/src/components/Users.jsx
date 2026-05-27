import { ResourceTable } from './ResourceTable.jsx'

export function Users() {
  return (
    <ResourceTable
      resourceName="users"
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
