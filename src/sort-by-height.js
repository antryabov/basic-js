const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = [...arr].sort((a, b) => a - b).filter((el) => el !== -1);
  if (!arr.includes(-1)) {
    return sortArr;
  }
  const copyArr = [...arr].map((el) => {
    if (el !== -1) {
      return null;
    } else {
      return -1;
    }
  });

  let flag = 0;
  let counter = 0;
  const result = copyArr.map((el) => {
    if (el === null) {
      if (flag) {
        counter++;
      }
      flag = 1;
      return sortArr[counter];
    } else {
      return -1;
    }
  });

  return result;
}

module.exports = {
  sortByHeight,
};
