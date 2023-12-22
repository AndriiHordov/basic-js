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
	let result = '';
    let count = 1;
	for(let [index, char] of Object.entries(str)) {
		if(char === str[+index + 1]) {
            count++;
            continue;
        }
        result += count > 1? count + char : char;
        count = 1;
	}
	return result;
}

module.exports = {
  encodeLine
};
