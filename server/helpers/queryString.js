const queryString = urlString => {
  let params = {}
  const paramsStr = urlString.split('?')[1]
  const entries = paramsStr.split('&')

  entries.forEach(e => {
    let entry = e.split('=')
    params[entry[0]] = entry[1]
  })

  return params
}

module.exports = {
  queryString,
}

// This is a simple custom querystring function that can be a substitute for
// NodeJS querystring module. (Just in case it shouldn't be used also)

/* const urlString =
  '/api?apiKey=at_356vPR8pnrmzcEeSHdjunYCEQgi6m&output=json&search=44:38:39:ff:ef:57'
result = queryString(urlString)

console.log(result) */
