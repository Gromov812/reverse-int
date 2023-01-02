module.exports = function reverse(n) {
    if (n < 0) {
        n = n - n * 2;
        return +n.toString().split('').reverse().join('')
    }
    else return +n.toString().split('').reverse().join('')
}
