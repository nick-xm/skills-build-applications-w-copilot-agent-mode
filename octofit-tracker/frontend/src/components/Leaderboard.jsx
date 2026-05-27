import { ResourceTable } from './ResourceTable.jsx'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export function Leaderboard() {
  return (
    <ResourceTable
      resourceName="leaderboard"
      endpointUrl={leaderboardEndpoint}
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
