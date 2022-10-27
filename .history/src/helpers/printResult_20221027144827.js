const printResult = (macAddress, companyName) => {
  const color = '\x1b[32m%s\x1b[0m'

  console.log(color, '-------')
  console.log(`THIS IS YOUR RESULT: ${color}`, companyName)
  console.log(
    `${companyName} is the company related to MAC address: ${color}`,
    mac
  )
  console.log(color, '-------')
}
