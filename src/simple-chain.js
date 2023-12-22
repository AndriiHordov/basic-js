const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain : [],
	length: 0,
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
		return this;
  },
  removeLink(position) {
		if(!this.chain[position - 1] || position <= 0){
			this.chain.length = 0;
			throw new Error('You can\'t remove incorrect link!');
		} 
		this.chain.splice(position - 1, 1);
		return this;
  },
  reverseChain() {
		this.chain.reverse();
    return this;
  },
  finishChain() {
		let copy = [...this.chain];
		this.chain.length = 0;
    return copy.join('~~');
  }
};

module.exports = {
  chainMaker
};
