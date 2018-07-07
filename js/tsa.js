/**
 * Traffic Statistics Analysis
 * based on CNZZ
 * @file app/tsa.js
 * @desc this is tsa.js
 * @version 0.1.0
 * @author luoxiaochuan <lxchuan12@163.com>
 * @date 2018-07-04
 * @copyright 2018
 */
/* jshint esversion: 6 */
const CNZZ_ID = 1273798602;

export default class Tsa{
	category = '';
	constructor(category){
		console.log('初始化');

		this.category = category;

		if(window.hasOwnProperty('_czc')){
			console.log('已经引入cnzz');
		}
		else{
			console.log('未引入cnzz');
			let protocol = document.location.protocol === 'https:' ? 'https://' : 'http://';
			let cnzzUrl = `${protocol}s22.cnzz.com/z_stat.php?id=${CNZZ_ID}&web_id=${CNZZ_ID}`;
			let cnzzTag = document.createElement('script');

			cnzzTag.setAttribute('src', cnzzUrl);
			let head = document.querySelector('head');
			head.appendChild(cnzzTag);
		}
	}
	/**
	 * push
	 * @author luoxiaochuan <lxchuan12@163.com>
	 * @date   2018-07-04
	 * @param  {String}   action   操作*
	 * @param  {String}   value    值
	 */
	push(action, value = 1){
		console.log(this.category, action, value);
		window._czc.push([ '_trackEvent', this.category, action, `[${window.SYS_COMPANY && window.SYS_COMPANY.name}](${window.SYS_COMPANY && window.SYS_COMPANY.code})+[${window.SYS_USER && window.SYS_USER.vipName}]`, value, '' ]);
	}
}
