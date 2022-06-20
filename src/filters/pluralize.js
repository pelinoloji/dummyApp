import pluralize from 'pluralize'

export default function (count = 0, word = '', inclusive = true) {
  return pluralize(word, count, inclusive)
}
