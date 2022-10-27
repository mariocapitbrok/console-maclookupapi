const querystring = require('querystring')

const App = async (req, res) => {
  const params = querystring.parse(req.url.split('?')[1])
  const apiKey = params.apiKey
  const search = params.search
  const url = `https://api.macaddress.io/v1?apiKey=${apiKey}&output=json&search=${search}`

  if (req.url.includes('/api') && req.method === 'GET') {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log(data.json())

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write('Hello GET response \n')
    res.write(`Params: ${JSON.stringify(params)}`)
    res.end()
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

module.exports = App
