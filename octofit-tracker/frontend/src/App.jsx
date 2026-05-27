import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { apiBaseUrl, isUsingLocalApi } from './api.js'
import './App.css'
import { Activities } from './components/Activities.jsx'
import { Leaderboard } from './components/Leaderboard.jsx'
import { Teams } from './components/Teams.jsx'
import { Users } from './components/Users.jsx'
import { Workouts } from './components/Workouts.jsx'

const navItems = [
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Multi-tier fitness tracker</p>
          <h1>OctoFit Tracker</h1>
          <p className="api-note">
            API: <code>{apiBaseUrl}</code>
          </p>
        </div>
        {isUsingLocalApi && (
          <p className="env-warning">VITE_CODESPACE_NAME is not set, so the app is using localhost.</p>
        )}
      </header>

      <nav className="app-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
