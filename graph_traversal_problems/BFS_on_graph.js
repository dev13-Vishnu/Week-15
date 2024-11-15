 function breadthFirstSearch(graph,start){
    let visited = new Set();
    let queue = [start];
    let result = [];

    while(queue.length > 0){
        let node = queue.shift();
        if(visited.has(node)) continue;
        visited.add(node);
        result.push(node);

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)) {
            queue.push(neighbor);
                
            };
        }
    }
    return result;
 }

const graph = {
    0:[1, 2],
    1 : [0, 3, 4],
    2 : [1],
    3 : [1],
    4 : [1, 5],
    5 : [4]

}

console.log(breadthFirstSearch(graph, 0));