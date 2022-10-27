const getMacData = async (api_key, search) => {
  const apiKey = api_key
  const output = 'json'
  const url = `https://api.macaddress.io/v1?apiKey=${apiKey}&output=${output}&search=${search}`
  const options = {}

  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

module.exports = {
  getMacData,
}

const API_KEY = 'at_356vPR8pnrmzcEeSHdjunYCEQgi6m'
const search = '44:38:39:ff:ef:57'

getMacData(API_KEY, search).then(data => {
  console.log(data)
})
