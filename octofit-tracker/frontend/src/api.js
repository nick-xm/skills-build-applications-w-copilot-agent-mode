const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export const isUsingLocalApi = !codespaceName

export function extractCollection(payload, resourceName) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.[resourceName])) {
    return payload[resourceName]
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  if (Array.isArray(payload?.docs)) {
    return payload.docs
  }

  return []
}

export async function fetchCollection(resourceName) {
  const response = await fetch(`${apiBaseUrl}/${resourceName}/`)

  if (!response.ok) {
    throw new Error(`Request failed for ${resourceName}: ${response.status}`)
  }

  const payload = await response.json()
  return extractCollection(payload, resourceName)
}
