'use strict';

const { hello } = require('../src/greetings');

let callbackMock;

beforeEach(() => {
  /** global: jest */
  callbackMock = jest.fn();
});

test('hello', () => {
  const event = {};

  hello(event, callbackMock);

  expect(callbackMock.mock.calls.length).toBe(1);
  expect(callbackMock).toHaveBeenCalledWith(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'hello' })
  });
});
