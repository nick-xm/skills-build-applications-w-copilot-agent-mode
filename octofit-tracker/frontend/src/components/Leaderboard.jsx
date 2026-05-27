import { ResourceTable } from './ResourceTable.jsx'

export function Leaderboard() {
  return (
    <ResourceTable
      resourceName="leaderboard"
      title="Leaderboard"
      description="Competitive rankings across OctoFit teams and athletes."
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'displayName', label: 'Athlete' },
        { key: 'teamName', label: 'Team' },
        { key: 'points', label: 'Points' },
        { key: 'userEmail', label: 'Email' },
      ]}
    />
  )
}
