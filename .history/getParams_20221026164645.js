const { url } = require('inspector')

const getParams = urlString => {
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
  getParams,
}

const urlString =
  '/api?apiKey=at_356vPR8pnrmzcEeSHdjunYCEQgi6m&output=json&search=44:38:39:ff:ef:57'
result = getParams(urlString)

console.log(result)
