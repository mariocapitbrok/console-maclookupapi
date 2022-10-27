const queryString = urlString => {
  let params = {}
  //const paramsStr = urlString.split('?')[1]
  const entries = urlString.split('&')

  entries.forEach(e => {
    let entry = e.split('=')
    params[entry[0]] = entry[1]
  })

  return params
}

module.exports = {
  queryString,
}

const urlString =
  '/api?apiKey=at_356vPR8pnrmzcEeSHdjunYCEQgi6m&output=json&search=44:38:39:ff:ef:57'
result = queryString(urlString)

console.log(result)
