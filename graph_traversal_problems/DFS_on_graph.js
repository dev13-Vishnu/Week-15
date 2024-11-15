function depthFirstSearch(graph, start){
    let visited = new Set();
    let result = [];

    function dfs(node){
        if(visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for(let neighbor in graph[node]){
            dfs(neighbor);
        }
    }
    dfs(start);
    return result;
}
const graph = {
    0: [1, 2],
    1 :[3, 4],
    2 : [0],
    3 : [1],
    4 : [ 1, 5],
    5 : [4]
}

console.log(depthFirstSearch(graph, 0));
