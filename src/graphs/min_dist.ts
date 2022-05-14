function findMinDist(start:number, dest:number, adj:number[][], n:number):number{
    var dist:number[] = new Array(n)
    for(var i=0;i<n;i++) dist[i] = Number.MAX_VALUE
    fillMinDistUsingBFS(start, adj, dist)
    return dist[dest]
}

function fillMinDistUsingBFS(start:number, adj:number[][], dist:number[]){
    dist[start] = 0
    var que:number[] = []
    que.push(start)
    while(que.length > 0){
        var node = que.shift()
        for(let i = 0;i<adj[node].length;i++){
            if(adj[node][i]!=0){
                 var len = dist[node]+adj[node][i]
                 if(len < dist[i]){
                     dist[i] = len
                     que.push(i)
                 }
            }
        }
    }
}

var sampleGraph = [
    [0, 2, 0, 1, 4],
    [0, 0, 3, 9, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 8],
    [0, 0, 0, 0, 0],
]
console.log(findMinDist(0, 3, sampleGraph, 5))