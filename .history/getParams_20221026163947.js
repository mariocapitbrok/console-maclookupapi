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
