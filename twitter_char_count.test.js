const twitterCharCount = require('./twitter_char_count')

describe('Twitter Character Count function', () => {
  test('should return correct character count for normal string', () => {
    const str = 'Former UNM law professor named FERC chair'
    const expected = str.length
    expect(twitterCharCount(str)).toBe(expected)
  })

  test('should return correct character count for string with combined character', () => {
    const str = 'cafe\u0301'
    const expected = 4
    expect(twitterCharCount(str)).toBe(expected)
  })

  test('should return correct character count for string with url', () => {
    const str = 'http://bit.ly/1IifCDF'
    const expected = 23
    expect(twitterCharCount(str)).toBe(expected)
  })

  test('should return correct character count for string with url without protocol', () => {
    const str = 'bit.ly/1IifCDF'
    const expected = 23
    expect(twitterCharCount(str)).toBe(expected)
  })

  test('should return correct character count for string with unparsable urls', () => {
    const str = 'bit.ly/1IifCDF,bit.ly/1IifCDF'
    const expected = 29
    expect(twitterCharCount(str)).toBe(expected)
  })

  test('should return correct character count for string with encoded comma', () => {
    const str = 'bit.ly/1IifCDF%2C'
    const expected = 23
    expect(twitterCharCount(str)).toBe(expected)
  })

  test('should return correct character count for tweet', () => {
    const str = 'Former UNM law professor named FERC chair http://bit.ly/1IifCDF'
    const expected = 65
    expect(twitterCharCount(str)).toBe(expected)
  })
})