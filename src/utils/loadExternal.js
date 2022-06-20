export const loadExternal = ({ src, onload, configEnabled = true, forceReplace = false }) => {
  const id = src.substring(src.lastIndexOf('/') + 1)
  const existingElement = document.getElementById(id)

  if (!configEnabled || (!forceReplace && existingElement)) {
    return onload ? onload() : undefined
  } else if (forceReplace && existingElement) {
    existingElement.parentNode.removeChild(existingElement)
  }

  if (id.endsWith('.js')) {
    const s = document.createElement('script')

    s.setAttribute('id', id)
    s.src = src
    s.async = true

    const e = document.getElementsByTagName('script')[0]

    e.parentNode.insertBefore(s, e)
    e.onload = onload

    if (forceReplace && existingElement) {
      onload()
    }
  } else if (id.endsWith('.css')) {
    const s = document.createElement('link')
    s.setAttribute('id', id)
    s.href = src
    s.rel = 'stylesheet'
    s.async = true

    const e = document.getElementsByTagName('link')[0]

    e.parentNode.insertBefore(s, e)
  }
}

export const removeExternal = src => {
  const id = src.toString().substring(src.lastIndexOf('/') + 1)
  const existingElement = document.getElementById(id)

  if (existingElement) {
    existingElement.parentNode.removeChild(existingElement)
  }
}
