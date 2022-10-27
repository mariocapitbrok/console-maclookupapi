const getMacData = async (api_key, search) => {
  const apiKey = api_key
  const output = 'json'
  const url = `https://api.macaddress.io/v1?apiKey=${apiKey}&output=${output}&search=${search}`
  const options = {}

  //TODO: BaseURL validation.

  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

module.exports = {
  getMacData,
}
