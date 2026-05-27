import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined || value === '') {
    return '—'
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(value))
  }

  return String(value)
}

export function ResourceTable({ resourceName, title, description, columns }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isCurrent = true

    async function loadRecords() {
      try {
        const collection = await fetchCollection(resourceName)

        if (isCurrent) {
          setRecords(collection)
          setStatus('ready')
        }
      } catch (loadError) {
        if (isCurrent) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadRecords()

    return () => {
      isCurrent = false
    }
  }, [resourceName])

  return (
    <section className="data-section">
      <div className="section-heading">
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {status === 'loading' && <p className="status-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="status-message error">{error}</p>}

      {status === 'ready' && (
        <div className="table-wrap">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record._id ?? JSON.stringify(record)}>
                  {columns.map((column) => (
                    <td key={column.key}>{formatValue(record[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {records.length === 0 && <p className="empty-state">No records returned from the API.</p>}
        </div>
      )}
    </section>
  )
}
