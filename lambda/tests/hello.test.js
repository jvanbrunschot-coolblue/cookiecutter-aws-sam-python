'use strict';

const { hello } = require('../../src/hello.js');

let callbackMock;

beforeEach(() => {
  /** global: jest */
  callbackMock = jest.fn();
});

test('hello', () => {

  hello(event, callbackMock);

  expect(callbackMock.mock.calls.length).toBe(1);
  expect(callbackMock).toHaveBeenCalledWith(null, {
    status: '200',
    body: {"message": "hello"}
  });
});
