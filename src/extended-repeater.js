const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const toPrimitive = (s) => typeof s !== 'string'? String(s) : s;
	let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
	const sepLength = separator.length;
	const addSepLength = additionSeparator.length;
	str = toPrimitive(str);
	addition = toPrimitive(addition);
	const add = (addition.concat(additionSeparator)).repeat(additionRepeatTimes);
	str = (str.concat(add.substring(0, add.length - addSepLength)).concat(separator)).repeat(repeatTimes);
	return str.substring(0, str.length - sepLength);
}

module.exports = {
  repeater
};
