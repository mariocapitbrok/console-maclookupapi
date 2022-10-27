const { getMacData } = require('./modules/getMacData')

const API_KEY = process.env.API_KEY || process.argv[2]
const search = process.argv[3] || '44:38:39:ff:ef:57'

getMacData(API_KEY, search).then(data => {
  console.log(data)
})
