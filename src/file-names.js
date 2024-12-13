const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return [];
  const result = [];
  let counter = 0;
  let i = 0;
  let prev = i - 1;

  while (i < names.length) {
    if (!result.includes(names[i])) {
      result.push(names[i]);
      prev++;
    } else if (result[prev] === names[i]) {
      counter++;
      if (names.find((el) => el === result[prev]).split('(')[1]) {
        result.push(
          names[i] +
            `(${parseInt(
              names.find((el) => el === result[prev]).split('(')[1]
            )})`
        );
      } else {
        result.push(names[i] + `(${counter})`);
        counter--;
      }
    } else {
      result.push(
        names[i] +
          `(${
            parseInt(names.find((el) => el === result[prev]).split('(')[1]) + 1
          })`
      );
    }
    i++;
  }

  return result;
}

module.exports = {
  renameFiles,
};
