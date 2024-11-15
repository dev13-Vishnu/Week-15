// 2. Problem 2: Graph Traversal using DFS (Recursive)
// Problem: Given an undirected graph represented as an adjacency list, perform a DFS traversal starting from a given node and return the order of traversal.


function dfsTraversal(graph, startNode, visited = new Set(), traversalOrder = []) {
    visited.add(startNode);
    traversalOrder.push(startNode);

    for (let neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            dfsTraversal(graph, neighbor, visited, traversalOrder);
        }
    }

    return traversalOrder;
}

const graph2 = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1, 5],
    5: [4]
};

console.log(dfsTraversal(graph2, 0));  