const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const digitDomainsOnWord = domains.map((el) => {
    return el.split('.').reverse()
  })
  const result = {}
  let temp = []
  let temp1 = []
  let temp2 = []
  for (let i = 0; i < digitDomainsOnWord.length; i += 1) {
    temp.push(digitDomainsOnWord[i][0])
    result['.' + digitDomainsOnWord[i][0]] = temp.length
    temp1.push(digitDomainsOnWord[i][0] + digitDomainsOnWord[i][1])
    result['.' + digitDomainsOnWord[i][0] + '.' + digitDomainsOnWord[i][1]] = temp1.length
    if (digitDomainsOnWord[i][2] !== undefined) {
      temp2.push(digitDomainsOnWord[i][0] + digitDomainsOnWord[i][1] + digitDomainsOnWord[i][2])
      result['.' + digitDomainsOnWord[i][0] + '.' + digitDomainsOnWord[i][1] + '.' + digitDomainsOnWord[i][2]] = temp2.length
      temp2 = []
    }
  }

  return result
}

module.exports = {
  getDNSStats
};
