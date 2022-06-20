export default function(link) {
  return /^[a-z]{2,8}:\/\//i.test(link) ? link : `http://${link}`
}
