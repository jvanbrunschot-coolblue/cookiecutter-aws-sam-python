'use strict';

const { helloWorld } = require('../src/helloWorld');

let callbackMock;

beforeEach(() => {
  /** global: jest */
  callbackMock = jest.fn();
});

test('helloWorld', () => {
  const event = {};

  helloWorld(event, callbackMock);

  expect(callbackMock.mock.calls.length).toBe(1);
  expect(callbackMock).toHaveBeenCalledWith(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'helloWorld' })
  });
});
