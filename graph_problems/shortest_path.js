// 2. Problem 2: Shortest Path in an Unweighted Graph
// Problem Statement: Given an unweighted graph represented by an adjacency list and two nodes, source and target, find the shortest path between source and target. Return the path as an array of nodes. If no path exists, return an empty array.

function shortestPath(graph, source, target) {
    const queue = [[source]];
    const visited = new Set([source]);

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (node === target) return path;

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    return []; 
}

const graph = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2, 4],
    [3]
];
console.log(shortestPath(graph, 0, 4));
console.log(shortestPath(graph, 0, 5));
