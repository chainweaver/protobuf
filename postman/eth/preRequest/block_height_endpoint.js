for (const [key, value] of Object.entries(data)) {
  if (value === null) {
    pm.request.url.removeQueryParams(key)
  }
}