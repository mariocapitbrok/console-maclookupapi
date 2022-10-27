const readline = require('readline')
const { getMacData } = require('./modules/getMacData')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Provide a Mac Address:', function (mac) {
  rl.question('Provide your API Key:', function (API_KEY) {
    // validateApiKey(API_KEY)
    // validateMacAddress(mac='44:38:39:ff:ef:57')

    getMacData(API_KEY, mac).then(data => {
      console.log(data)
    })

    rl.close()
  })
})
