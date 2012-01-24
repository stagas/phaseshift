;(function () {
  function phaseShift (arr, n, m1, m2) {
    if ('undefined' === typeof n) n = 1
    else if ('number' !== typeof n) throw new TypeError('Invalid type: ' + typeof n)
    n = parseInt(n, 10)
    if (isNaN(n)) throw new TypeError(n + ' is NaN')
    if (n < 0)
      m1 = 'push', m2 = 'shift'
    else
      m1 = 'unshift', m2 = 'pop'
    for (var i = Math.abs(n); i--;) {
      arr[m1](arr[m2]())
    }
    return arr
  }
  if ('undefined' === typeof module) {
    window.phaseShift = phaseShift
  } else {
    module.exports = phaseShift
  }
}());
