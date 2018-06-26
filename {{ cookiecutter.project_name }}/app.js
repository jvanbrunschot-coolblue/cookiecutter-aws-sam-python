'use strict';

const hello = require('./src/helloWorld');

exports.hello = (event, context, callback) => {
  hello(event, callback);
};
