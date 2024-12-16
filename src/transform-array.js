const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (
    !arr ||
    (arr instanceof Object && arr.toString() === '[object Object]') ||
    typeof arr === 'number' ||
    typeof arr === 'undefined' ||
    String(arr) === 'null'
  ) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length && arr instanceof Array) {
    return [];
  }
  if (arr[0] instanceof Array) {
    let copy = [...arr];
    const fil = arr[0].filter((el) => typeof el === 'number');
    const result = copy.filter((el) => !el instanceof Array);
    result.push(...fil);

    return copy;
  }
  let flag = false;
  const CONSTANTS = [
    '--double-next',
    '--double-prev',
    '--discard-prev',
    '--discard-next',
  ];
  const copyArr = [...arr].map(() => '').filter((el) => Boolean(el));
  for (let i = 0; i < arr.length; i += 1) {
    if (CONSTANTS.includes(arr[0]) && !flag) {
      copyArr.push(arr[0]);
      flag = true;
    }
    const finder = CONSTANTS.find((el) => el === arr[i + 1]);
    const findConstants = CONSTANTS.find((el) => el === arr[i]);
    if (finder) {
      if (arr[i + 1] === '--double-next') {
        copyArr.push(arr[i]);
        copyArr.push(arr[i + 1]);
        copyArr.push(arr[i + 2]);
      } else if (arr[i + 1] === '--double-prev') {
        copyArr.push(arr[i]);
        copyArr.push(arr[i]);
        copyArr.push(arr[i + 1]);
      } else if (arr[i + 1] === '--discard-prev') {
        copyArr.push(arr[i + 1]);
      } else if (arr[i + 1] === '--discard-next') {
        copyArr.push(arr[i]);
        copyArr.push(arr[i + 1]);
      }
    } else if (!findConstants) {
      if (copyArr[i - 1] === '--discard-next') {
        continue;
      }
      copyArr.push(arr[i]);
    }
  }
  return copyArr;
}

module.exports = {
  transform,
};
