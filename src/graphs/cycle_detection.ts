function detectCycle(graph:number[][], n:number):boolean{
    return detectUsingDFS(graph, n);
}
function detectUsingDFS(graph:number[][], n:number):boolean{
    var visited:boolean[] = new Array(n);
    var dfsVisit:boolean[] = new Array(n);
    for(let i=0;i<n;i++){
        visited[i] = false;
        dfsVisit[i] = false;
    }
    for(var i=0;i<n;i++){
        if(!visited[i] && dfsUtil(i, graph, visited, new Array(n))) return true;
    }
    return false;
}

function dfsUtil(node:number, graph:number[][], visited:boolean[], dfsVisit:boolean[]):boolean{
    visited[node] = true
    dfsVisit[node] = true
    for(var i = 0;i<graph[node].length;i++){
        var n:number = graph[node][i];
        if(!visited[n]) {
            if(dfsUtil(n,graph, visited, dfsVisit)) return true;
        }
        else if(dfsVisit[n]) return true;
    }
    dfsVisit[node] = false
    return false;
}

var graph = [
    [1, 3],
    [2],
    [3],
    []
]
var n = 4
var isCyclePresent = detectCycle(graph, n)
console.log(isCyclePresent?"Present":"Not Present")