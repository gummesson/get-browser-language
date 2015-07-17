/*!
 * Dependencies
 */

var test = require('tape')
var getBrowserLanguage = require('../')

/*!
 * Tests
 */

test('getBrowserLanguage()', function(assert) {
  var lang = getBrowserLanguage()
  assert.ok(lang, lang)
  assert.end()
})
