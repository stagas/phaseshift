var assert = require('assert')
var phase = require('./phaseshift')

assert.deepEqual(phase('abcde'.split(''),   1), 'eabcd'.split(''))
assert.deepEqual(phase('abcde'.split(''),   2), 'deabc'.split(''))
assert.deepEqual(phase('abcde'.split(''),  -1), 'bcdea'.split(''))
assert.deepEqual(phase('abcde'.split(''),  -2), 'cdeab'.split(''))
assert.deepEqual(phase('abcde'.split(''),   0), 'abcde'.split(''))
assert.deepEqual(phase('abcde'.split(''),  15), 'abcde'.split(''))
assert.deepEqual(phase('abcde'.split(''), -15), 'abcde'.split(''))

try {
  phase('abcde'.split(''), 'problem')
} catch (err) {
  assert.throws(err, TypeError)
}
try {
  phase('abcde'.split(''), 1 * 'a')
} catch (err) {
  assert.throws(err, TypeError)
}

console.log('all tests pass')
