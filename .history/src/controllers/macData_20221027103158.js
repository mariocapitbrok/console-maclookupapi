//const querystring = require('querystring')
const { queryString } = require('../helpers/queryString')

const getMacData = async requestUrl => {
  const params = queryString(requestUrl)
  const apiKey = params.apiKey
  const output = 'json'
  const search = params.search
  const url = `https://api.macaddress.io/v1?apiKey=${apiKey}&output=${output}&search=${search}`
  const options = {}

  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

module.exports = {
  getMacData,
}
