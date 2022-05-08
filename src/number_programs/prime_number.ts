export function isPrime(n:number):boolean{
    var i:number;
    for(i = 2;i*i<=n;i++)
        if(n%i == 0) return false
    return true
}