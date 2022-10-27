const querystring = require('querystring')

const App = async (req, res) => {
  const params = querystring.parse(req.url.split('?')[1])
  const apiKey = params.apiKey
  const output = 'json'
  const search = params.search
  const url = `https://api.macaddress.io/v1?apiKey=${apiKey}&output=${output}&search=${search}`

  if (req.url.includes('/api') && req.method === 'GET') {
    /* fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      }) */

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

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
