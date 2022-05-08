"use strict";
exports.__esModule = true;
exports.isPrime = void 0;
function isPrime(n) {
    var i;
    for (i = 2; i * i <= n; i++)
        if (n % i == 0)
            return false;
    return true;
}
exports.isPrime = isPrime;
