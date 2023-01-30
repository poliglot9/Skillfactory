const reverseString = require('../reverseString')

describe('reverseString examination', () => {
  it(`Reverse 'example'`, () => {
    const received = reverseString('example')
    expect(received).toBe('elpmaxe')
  }),
    it(`Reverse empty string`, () => {
      const received = reverseString('')
      expect(received).toBe('')
    }),
    it(`Reverse NON string`, () => {
      const received = reverseString(0)
      expect(received).toBe(undefined)
    })
})