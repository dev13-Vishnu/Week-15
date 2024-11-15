function kosaraju(graph) {
    let visited = new Set();
    let stack = [];
    let components = [];

    // Step 1: Perform DFS and push nodes to stack in postorder
    function fillOrder(node) {
        visited.add(node);
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) fillOrder(neighbor);
        }
        stack.push(node);
    }

    // Step 2: Transpose the graph
    function transpose(graph) {
        const newGraph = {};
        for (let node in graph) newGraph[node] = [];
        for (let node in graph) {
            for (let neighbor of graph[node]) {
                newGraph[neighbor].push(node);
            }
        }
        return newGraph;
    }

    // Step 3: DFS on transposed graph based on stack order
    function dfs(node, component) {
        visited.add(node);
        component.push(node);
        for (let neighbor of transposedGraph[node]) {
            if (!visited.has(neighbor)) dfs(neighbor, component);
        }
    }

    // Build postorder stack
    for (let node in graph) {
        if (!visited.has(node)) fillOrder(node); // Treat node as a string consistently
    }

    // Transpose the graph
    const transposedGraph = transpose(graph);

    // Reset visited set for the second DFS pass
    visited.clear();

    // Find strongly connected components using the stack
    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

// Example directed graph
const directedGraph = {
    "0": ["1"],
    "1": ["2"],
    "2": ["0", "3"],
    "3": ["4"],
    "4": []
};

console.log(kosaraju(directedGraph)); // Expected output: [["0", "2", "1"], ["3"], ["4"]]
