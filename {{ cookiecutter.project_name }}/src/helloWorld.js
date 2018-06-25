'use strict';

/**
 * @param {Object} event
 * @param callback
 */
function helloWorld(event, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: 'helloWorld' })
    });
    return;
  };

module.exports = { helloWorld };
