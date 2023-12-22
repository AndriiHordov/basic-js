const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
		const domStats = {};
		domains = domains.map(item => item.split('.').map(element => element = `.${element}`));
		for(let dns of domains) {
				let prop = '';
				while(dns.length) {
						prop += dns.pop();
						domStats[prop] = domStats[prop] + 1 || 1;
				}
		}
		return domStats;
	}

module.exports = {
  getDNSStats
};
