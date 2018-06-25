'use strict';

const hello = require('./src/hello');

exports.hello = (event, context, callback) => {
  hello(event, callback);
};
