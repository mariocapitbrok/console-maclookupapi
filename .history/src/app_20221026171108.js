const querystring = require('querystring')

const App = async (req, res) => {
  const params = querystring.parse(req.url.split('?')[1])

  if (req.url.includes('/api') && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write('Hello GET response \n')
    res.write(`Params: ${querystring.stringify(params)}`)
    res.end()
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

module.exports = App
