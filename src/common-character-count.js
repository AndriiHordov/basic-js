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
	const first = {};
    const second = {};
    const result = []; 
    [].forEach.call(s1, el => first[el] = first[el] + 1 || 1);
    [].forEach.call(s2, el => second[el] = second[el] + 1 || 1);
	for(let char in first) {
		if(second[char]) {
			result.push(Math.min(first[char], second[char]));
		}
	}
    return result.reduce((sum, el) => sum + el, 0);
}

module.exports = {
  getCommonCharacterCount
};
