const { url } = require('inspector')

const getParams = urlString => {
  let params = {}
  const paramsStr = urlString.split('?')[1]
  const entries = paramsStr.split('&')

  return entries
}

module.exports = getParams

const urlString =
  'http://localhost:5000/api?apiKey=at_356vPR8pnrmzcEeSHdjunYCEQgi6m&output=json&search=44:38:39:ff:ef:57'

result = getParams(urlString)

console.log(result)
