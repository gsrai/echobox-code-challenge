function twitterCharCount(str) {
  let count = 0
  // find any qualified urls
  const idx = findQualifiedUrls(str)
  if (idx !== str.length) count += 23
  // remove qualified urls, for each url add 23 to count
  const noUrlStr = str.slice(0, idx)
  // normal nfc normalised code point count
  const foo = Array.from(noUrlStr.normalize('NFC')).map(c => c.codePointAt(0)).length
  count += foo
  return count
}

const QUALIFIED_URL_REGEX =  /((https?):\/\/)?([\w\d\-]+\.)+\w{2,}(\/.+)?/

function findQualifiedUrls(str) {
  const matches = str.match(QUALIFIED_URL_REGEX)
  return matches === null ? str.length : matches.index
}

module.exports = twitterCharCount