const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array.from({ length: matrix.length }, () => []);

  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (
        matrix[i].filter((el) => el === false).length === matrix[i].length &&
        matrix[i + 1].filter((el) => el === false).length === matrix[i].length
      ) {
        result[i].push(0);
        result[i + 1].push(0);
      } else {
        if (matrix[i][j + 1] || matrix[i + 1][j]) {
          result[i].push(2);
        } else {
          result[i].push(1);
        }
        if (i + 2 === matrix.length) {
          console.log(i + 2);
          console.log(matrix.length);
          result[matrix.length - 1].push(1);
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
