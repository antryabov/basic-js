const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const temp = str.split('').reduce((acc, el, ind, arr) => {
    if (el === arr[ind + 1]) {
      if (acc.includes(el)) {
        acc.push(el)
      }
    } else {
      acc.push(arr[ind])
    }
    return acc
  }, [])
  console.log(temp)
  const counter = []
  for (const letter of temp) {
    if (str.includes(letter)) {
      const t = str.split('').filter((el,) => {
        return el === letter
      })
      counter.push(t)
    }
  }
  return counter.map((el, ind) => {

    const block = counter.flat().filter((elFilter, ind, arr) => el[0] === elFilter && arr[0][0] === arr[arr.length - 1][0]).length === 4
    if (el.length !== 1 && !block) {
      return el.length + temp[ind]
    } else {
      return temp[ind]
    }
  }).join('')
}

module.exports = {
  encodeLine
};
