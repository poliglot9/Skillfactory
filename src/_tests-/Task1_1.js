const isString = l => typeof l === 'string' || l instanceof String

const reverseString = l => {
  if (!isString(l)) return undefined
  const reversed = []
  for (let i = l.length - 1; i >= 0; i--)  reversed.push(l[i])
  return reversed.join('').toString()
}

module.exports = reverseString

if (require.main === module) {
  console.log('result=', reverseString('example'))
}