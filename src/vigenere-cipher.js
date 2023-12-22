const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
		this.direct = direct;
	}
  encrypt(message = '', key = '') {
		this.#argChecker(message, key);
		return this.#operation(message, key, true);
  }
  decrypt(message = '', key = '') {
		this.#argChecker(message, key);
		return this.#operation(message, key, false);
  }
	#operation(message, key, enc) {
		let direct = this.direct;
		let copyMessage = message;
		let copyKey = key;
		let encryptedMessage = '';
		let i = -1;
		let j = 0;
		let source = this.#rawMessage(copyMessage);
		let keySource = this.#rawMessage(copyKey);
			while(++i < source.length) {
				if(source[i] < 65 || source[i] > 90) continue;
				if(!key[j]) j = 0;
				switch(enc) {
					case true: {
						source[i] = 65 + (source[i] + keySource[j]) % 26;
						break;
					}
					case false: {
						let char = (source[i] - keySource[j]) % 26;
						source[i] = 65 + (char >= 0? char : 26 + char);
						break;
					}
				}
        j++;
			}
		encryptedMessage = this.#cookiedMessage(source, direct);
		return encryptedMessage;
	}
	#rawMessage(str = '', direct = true) {
		if(!str) return;
		let strUpper = str.toUpperCase();
		let raw = [].map.call(strUpper, (el, i) => strUpper.charCodeAt(i));
		return direct? raw : raw.reverse();
	}
	#cookiedMessage(arr = [], direct = true) {
		if(!arr.length) return;
		let coockied = arr.map(el => String.fromCharCode(el));
		return direct? coockied.join('') : coockied.reverse().join('');
	}
	#argChecker(message, key) {
		if(!message || !key) throw new Error('Incorrect arguments!');
	}
}

module.exports = {
  VigenereCipheringMachine
};
