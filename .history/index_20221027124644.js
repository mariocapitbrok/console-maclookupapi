const readline = require('readline')
const { getMacData } = require('./modules/getMacData')

const API_KEY = process.env.API_KEY || process.argv[2]
const search = process.argv[3] || '44:38:39:ff:ef:57'

readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('Provide a Mac Address:', mac => {
  console.log(mac)
  readline.close()
})

getMacData(API_KEY, search).then(data => {
  console.log(data)
})
