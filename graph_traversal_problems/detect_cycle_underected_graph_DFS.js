// 3. Problem 3: Detect Cycle in an Undirected Graph (Using DFS)
// Problem: Given an undirected graph, determine if it contains a cycle. Use DFS to detect any back edges, which would indicate a cycle.

function hasCycle(graph, node, visited, parent) {
    visited.add(node);

    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            if (hasCycle(graph, neighbor, visited, node)) {
                return true;
            }
        } else if (neighbor !== parent) {
            return true;  
        }
    }
    return false;
}
function detectCycle(graph) {
    let visited = new Set();

    for (let node in graph) {
        if (!visited.has(Number(node))) {
            if (hasCycle(graph, Number(node), visited, -1)) {
                return true;
            }
        }
    }
    return false;
}
const graph3 = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1, 5],
    5: [4]
};
console.log(detectCycle(graph3)); 

graph3[5].push(3);
graph3[3].push(5);

console.log(detectCycle(graph3));  