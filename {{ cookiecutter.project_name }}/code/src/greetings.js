'use strict';

/**
 * @param {Object} event
 * @param callback
 */
function hello(event, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'hello' })
  });
}

function goodbye(event, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'goodbye' })
  });
}

module.exports = { hello, goodbye };
