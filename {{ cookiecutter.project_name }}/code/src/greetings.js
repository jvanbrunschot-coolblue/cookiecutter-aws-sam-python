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

module.exports = { hello };
