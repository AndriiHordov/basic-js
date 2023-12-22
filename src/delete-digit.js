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
	const len = [...`${n}`].length;
  const source = new Array(len).fill(`${n}`);
	return Math.max(...source.map((el, i) => el.replace(el[i], '')));
}

module.exports = {
  deleteDigit
};
