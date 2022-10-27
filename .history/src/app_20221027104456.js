const { getMacData } = require('./controllers/macData')

const App = async (req, res) => {
  const search = '44:38:39:ff:ef:57'
  //const search = process.argv[2]

  if (req.url.includes('/api') && req.method === 'GET') {
    const data = await getMacData(req.url, search)

    console.log(data)

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(data))
    res.end()
  } else {
    console.log('Route not found')
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

module.exports = App

App()
