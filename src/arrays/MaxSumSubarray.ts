import { isPrime } from "../number_programs/prime_number"

function getMaxSumSubarray(a:number[]):number{
    var sum = a[0], maxVal = a[0], i =0;
    for(i = 1;i<a.length;i++){
        maxVal = Math.max(maxVal+a[i], a[i]);
        sum = Math.max(sum, maxVal);
    }
    return sum;
}

var nums:number[] = [1, 2, 4, -1, -30, 0, 4];
var maxSum = getMaxSumSubarray(nums);
console.log(maxSum)
console.log(isPrime(maxSum)?"Prime Number":"Not Prime Number")
