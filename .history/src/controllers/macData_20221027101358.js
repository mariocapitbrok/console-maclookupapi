const querystring = require('querystring')

const getMacData = async (requestUrl, search) => {
  const params = querystring.parse(requestUrl.split('?')[1])
  const apiKey = params.apiKey
  const output = 'json'
  const search = search
  const url = `https://api.macaddress.io/v1?apiKey=${apiKey}&output=${output}&search=${search}`
  const options = {}

  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

module.exports = {
  getMacData,
}
