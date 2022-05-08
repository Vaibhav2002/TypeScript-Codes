"use strict";
exports.__esModule = true;
var prime_number_1 = require("../number_programs/prime_number");
function getMaxSumSubarray(a) {
    var sum = a[0], maxVal = a[0], i = 0;
    for (i = 1; i < a.length; i++) {
        maxVal = Math.max(maxVal + a[i], a[i]);
        sum = Math.max(sum, maxVal);
    }
    return sum;
}
var nums = [1, 2, 4, -1, -30, 0, 4];
var maxSum = getMaxSumSubarray(nums);
console.log(maxSum);
console.log((0, prime_number_1.isPrime)(maxSum) ? "PrimeNumber" : "Not PrimeNumber");
