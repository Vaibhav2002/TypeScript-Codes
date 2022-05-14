function findMinDist(start, dest, adj, n) {
    var dist = new Array(n);
    dist.fill(Number.MAX_VALUE, 0, n);
    fillMinDistUsingBFS(start, adj, dist);
    return dist[dest];
}
function fillMinDistUsingBFS(start, adj, dist) {
    dist[start] = 0;
    var que = [];
    que.push(start);
    while (que.length > 0) {
        var node = que.shift();
        for (var i = 0; i < adj[node].length; i++) {
            if (adj[node][i] != 0) {
                var len = dist[node] + adj[node][i];
                if (len < dist[i]) {
                    dist[i] = len;
                    que.push(i);
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
];
console.log(findMinDist(0, 3, sampleGraph, 5));
