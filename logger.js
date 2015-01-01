/*!
 * elogger
 * Copyright(c) 2014 Techunits
 * MIT Licensed
 */
exports = module.exports = function(type) {
	if(false !== type) {
		var morgan = require('morgan');
		logType = type || 'combined';
		return morgan(logType);
	}
	else {
		return function(req, res, next) {
			next();
		};
	}
};

exports.debug = function(str, flag) {
	if(null == flag || true === flag) {
		console.log('DEBUG: ' + "\t" + new Date() + "\t" + str);
	}
};

exports.info = function(str) {
	console.log('INFO: ' + "\t" + new Date() + "\t" + str);
};

exports.error = function(str) {
	console.log("\033[31m" + 'ERROR: ' + "\t" + new Date() + "\t" + str + "\033[0m");
};