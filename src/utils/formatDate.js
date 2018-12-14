export default function formatDate (timestamp) {
  if (timestamp) {
    let date = new Date(timestamp * 1000)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    return `${day}/${month}/${year}`
  } else {
    return ''
  }
}
