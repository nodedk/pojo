var assert = require('node:assert')
var { describe, test } = require('node:test')

var std = require('../../index.js')

describe('get', function () {
  test('basic', function ({ t }) {
    var data = { hello: 'bye' }
    var result = std.get(data, 'hello')
    assert.equal(result, 'bye')
  })
})
