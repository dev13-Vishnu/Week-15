// 1. Problem 1: Detect Cycle in an Undirected Graph
// Problem Statement: Given an undirected graph, determine if it contains a cycle. Use adjacency lists to represent the graph, and each node is numbered from 0 to n-1.

function hasCycle(graph) {
    const visited = new Set();

    function dfs(node, parent) {
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }

    for (let node = 0; node < graph.length; node++) {
        if (!visited.has(node)) {
            if (dfs(node, -1)) return true;
        }
    }
    return false;
}

const graph1 = [
    [1, 2],
    [0, 2],
    [0, 1, 3],
    [2, 4],
    [3]
];
console.log(hasCycle(graph1)); 

const graph2 = [
    [1],
    [0, 2],
    [1, 3],
    [2]
];
console.log(hasCycle(graph2));
