function detectCycle(graph, n) {
    return detectUsingDFS(graph, n);
}
function detectUsingDFS(graph, n) {
    var visited = new Array(n);
    var dfsVisit = new Array(n);
    for (let i = 0; i < n; i++) {
        visited[i] = false;
        dfsVisit[i] = false;
    }
    for (var i = 0; i < n; i++) {
        if (!visited[i] && dfsUtil(i, graph, visited, new Array(n)))
            return true;
    }
    return false;
}
function dfsUtil(node, graph, visited, dfsVisit) {
    visited[node] = true;
    dfsVisit[node] = true;
    for (var i in graph[node]) {
        var n = +i;
        if (!visited[n]) {
            dfsUtil(n, graph, visited, dfsVisit);
        }
        else if (dfsVisit[n])
            return true;
    }
    dfsVisit[node] = false;
    return false;
}
var graph = [
    [1, 3],
    [2],
    [3],
    []
];
var n = 4;
var isCyclePresent = detectCycle(graph, n);
console.log(isCyclePresent ? "Present" : "Not Present");
