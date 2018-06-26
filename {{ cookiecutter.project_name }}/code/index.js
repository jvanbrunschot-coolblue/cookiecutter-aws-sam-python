'use strict';

const { hello, goodbye } = require('./src/greetings');

exports.hello = (event, context, callback) => {
  hello(event, callback);
};

exports.goodbye = (event, context, callback) => {
  goodbye(event, callback);
};
