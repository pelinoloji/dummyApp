export default function(value) {
  if (typeof value !== 'string') return value
  return value
    .split(/([A-Z][a-z]+)/g)
    .filter(e => e)
    .join(' ')
}
