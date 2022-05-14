export function isPrime(n) {
    var i;
    for (i = 2; i * i <= n; i++)
        if (n % i == 0)
            return false;
    return true;
}
