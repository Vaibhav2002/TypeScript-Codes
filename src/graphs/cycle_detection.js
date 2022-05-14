function detectCycle(graph, n) {
    return detectUsingDFS(graph, n);
}
function detectUsingDFS(graph, n) {
    var visited = new Array(n);
    var dfsVisit = new Array(n);
    for (var i_1 = 0; i_1 < n; i_1++) {
        visited[i_1] = false;
        dfsVisit[i_1] = false;
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
    for (var i = 0; i < graph[node].length; i++) {
        var n = graph[node][i];
        if (!visited[n]) {
            if (dfsUtil(n, graph, visited, dfsVisit))
                return true;
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
