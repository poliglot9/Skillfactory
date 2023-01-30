const countDown = s => {
  const result = []
  for (let i = s; i > 0; i--) result.push(i)
  return result
}

module.exports = countDown

if (require.main === module) {
  console.log('index started')
  console.log('result=', countDown(3))
}