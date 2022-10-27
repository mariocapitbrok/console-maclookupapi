const { getParams } = require('./helpers/getParams')

const App = async (req, res) => {
  const params = getParams(req.url)
  console.log(params.apiKey)

  if (req.url.includes('/api') && req.method === 'GET') {
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
