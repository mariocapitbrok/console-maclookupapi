const http = require('http')

const app = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World')
}

const server = http.createServer(app)

const PORT = process.env.PORT || 5000

server.listen(PORT)
console.log(`Server running on port: ${PORT}`)
