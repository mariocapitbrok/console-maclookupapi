const readline = require('readline')
const { getMacData } = require('./modules/getMacData')

const API_KEY = process.env.API_KEY

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Provide a MAC Address:', function (mac) {
  //TODO: validateApiKey()
  //TODO: validateMacAddress(mac='44:38:39:ff:ef:57')

  getMacData(API_KEY, mac).then(data => {
    const companyName = data.vendorDetails.companyName
    console.log('-------')
    console.log('THIS IS YOUR RESULT:', companyName)
    console.log(`${companyName} is the company related to your MAC address.`)
    console.log('-------')
  })

  rl.close()
})
