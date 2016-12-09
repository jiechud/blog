var moment = require('moment');

/**
 * API  返回结果对象
 * @param {[string]} name    [结果名称]
 * @param {[object]} message [结果对象]
 * @param {[string]} code    [结果代码(当状态描述不了返回信息的时候，可以用code)]
 * @param {[int]} status  [结果状态]
 */
var Result = function(name,message,code,status){
	this.name = name;
	this.message = message;
	this.code = code;
	this.status =status;
	this.time = moment().format('YYYY-MM-DD HH:mm:ss');
}

module.exports = Result;


