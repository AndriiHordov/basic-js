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
	let index = 0;
	let result = [];
	while(index !== -1) {
	 result[arr.indexOf(-1, index)] = -1;
		 index = arr.indexOf(-1, index+1);
	}
	arr = arr.sort((a, b) => a - b).filter(el => el !== -1);
	for(let i = 0, j = 0; i < arr.length; ) {
	  if(result[j] === -1) {
		  j++;
		  continue;
	  }
	 	result[j] = arr[i];
		j++;
	 	i++;
	}
	return result;
 }

module.exports = {
  sortByHeight
};
