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
  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
	if(!arr.length) return arr;
	let copy = [];
	for(let i = 0; i < arr.length; i++) {
				switch(arr[i]) {
					case '--discard-next': {
						i += 1;
						break;
					}
					case '--discard-prev': {
						if(copy.length > 1 && arr[i - 1] === copy[copy.length - 1]) copy.pop();
						break;
					}
					case '--double-next': {
						if(arr[i + 1]) copy.push(arr[i + 1]);
						break;
					}
					case '--double-prev': {
						if (copy[i - 1]) copy.push(copy[i - 1]);
						break;
					}
					default: {
						copy.push(arr[i]);
					}
			}
		}
		return copy;
	}
module.exports = {
  transform
};
