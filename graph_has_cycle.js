function hasCycles(graph){
    let visited = new Set();
    
    function dfs(node,parent){
        visited.add(node);
        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                if(dfs(neighbor,node)) return true;
            } else if(neighbor !==  parent){
                return true;
            }
        }
        return false;
    }
    for(let node in graph){
        if(!visited.has(node)){
            if(dfs(parseInt(node),-1)) return true;
        }
    }
    return false;
}

const cycleGraph ={
    0 : [1, 2],
    1 : [0, 3],
    2 : [0, 3],
    3 : [1, 2]
}

console.log(hasCycles(cycleGraph));