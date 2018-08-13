'use strict';

const { hello } = require('./src/greetings');

exports.hello = (event, context, callback) => {
  hello(event, callback);
};
