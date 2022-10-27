const querystring = require('querystring')

const App = async (req, res) => {
  const params = querystring.parse(req.url.split('?')[1])
  const apiKey = params.apiKey
  const output = 'json'
  const search = params.search
  const url = `https://api.macaddress.io/v1?apiKey=${apiKey}&output=${output}&search=${search}`

  if (req.url.includes('/api') && req.method === 'GET') {
    const data = await fetch(url)

    console.log(data.json())

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(`Successful request`)
    res.end()
  } else {
    console.log('Route not found')
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

module.exports = App
