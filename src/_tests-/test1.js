const countDown = require('../countDown')

describe('countDown examination', () => {
  it('Count down from 5', () => {
    const received = countDown(5)
    expect(received).toEqual([5, 4, 3, 2, 1])
  }),
  it('Count down from 1', () => {
    const received = countDown(1)
    expect(received).toEqual([1])
  }),
  it('Count down from 0', () => {
    const received = countDown(0)
    expect(received).toEqual([])
  }),
  it('Count down from -1', () => {
    const received = countDown(-1)
    expect(received).toEqual([])
  })
})