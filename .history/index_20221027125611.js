const readline = require('readline')
const { getMacData } = require('./modules/getMacData')

/* const API_KEY = process.env.API_KEY || process.argv[2]
const search = process.argv[3] || '44:38:39:ff:ef:57' */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Provide a Mac Address:', function (mac) {
  rl.question('Provide your API Key:', function (apiKey) {
    console.log(mac, apiKey)
  })
})

/* getMacData(API_KEY, search).then(data => {
  console.log(data)
}) */
