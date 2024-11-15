// 1. Problem 1: Graph Traversal using BFS
// Problem: Given an undirected graph represented as an adjacency list, perform a BFS traversal starting from a given node and return the order of traversal.

function bfsTraversal(graph, startNode) {
    let visited = new Set();
    let queue = [startNode];
    let traversalOrder = [];

    while (queue.length > 0) {
        let node = queue.shift();
        
        if (!visited.has(node)) {
            traversalOrder.push(node);
            visited.add(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return traversalOrder;
}

const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1, 5],
    5: [4]
};

console.log(bfsTraversal(graph, 0));  