const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n <= 10) return n / n
  return Math.floor(n / 100) * 10 + Math.floor(n % 10) > n % 100 ? Math.floor(n / 100) * 10 + Math.floor(n % 10) : n % 100
}

module.exports = {
  deleteDigit
};
