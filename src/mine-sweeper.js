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
	const setup = [];
	const len = matrix.length;
	const itemLength = matrix[0].length;
	matrix.forEach(el => setup.push(new Array(el.length).fill(0)));
	for (let i = 0; i < len; i += 1) {
		for (let j = 0; j < itemLength; j += 1) {
			if (matrix[i - 1]) {
				if (matrix[i - 1][j]) {
					setup[i][j] += 1;
				}
				if (matrix[i - 1][j + 1]) {
					setup[i][j] += 1;
				}
				if (matrix[i - 1][j - 1]) {
					setup[i][j] += 1;
				}
			}
			if (matrix[i + 1]) {
				if (matrix[i + 1][j + 1]) {
					setup[i][j] += 1;
				}
				if (matrix[i + 1][j - 1]) {
					setup[i][j] += 1;
				}
				if (matrix[i + 1][j]) {
					setup[i][j] += 1;
				}
			}
			if (matrix[i][j + 1]) {
					setup[i][j] += 1;
			}
			if (matrix[i][j - 1]) {
					setup[i][j] += 1;
			}       
		}
	}
	return setup;
}

module.exports = {
  minesweeper
};
