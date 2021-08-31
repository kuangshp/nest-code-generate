'use strict';

var co = require('co');

module.exports = exports = function wrapAll(object) {
	var keys = Object.getOwnPropertyNames(object);

	for (var index = 0; index < keys.length; index++) {
		var key = keys[index];
		var value = object[key];

		if ((typeof value === 'function') && (value.constructor.name === 'GeneratorFunction')) {
			object[key] = co.wrap(value);
		}
	}

	return object;
};
