const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a = s1.split('').sort()
  let b = s2.split('').sort()
  const answer = b.reduce((acc, el) => {
    console.log(a.filter(elFil => el === elFil).length)
    if (
      a.includes(el)
      && acc.length <= a.length
      && acc.filter(elAcc => elAcc === el).length !== a.filter(elFil => el === elFil).length
    ) {
      acc.push(el)
    }
    return acc
  }, [])
  return answer.length
}

module.exports = {
  getCommonCharacterCount
};
