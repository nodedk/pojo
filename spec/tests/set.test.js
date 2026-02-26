var assert = require('node:assert')
var { describe, test } = require('node:test')

var std = require('../../index.js')

describe('set', function () {
  test('basic', function () {
    var data = {}
    var result = std.set(data, 'hello', 'bye')
    assert.equal(result.hello, 'bye')
  })
})
