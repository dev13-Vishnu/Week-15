function djikstra(graph,start){
    const distances ={};
    const pq = new MinPriorityQueue();
    distances[start] = 0;
    for(let node in graph) {
        distances[node] = node === String(start) ? 0 : Infinity;
        

    }
    pq.enqueue(start, 0);
    while (!pq.isEmpty()){
        let { element : currentNode} = pq.dequeue();
        for(let [neighbor,weight] of graph[currentNode]){
            let newDistance =  distances[currentNode] + weight;
            if(newDistance < distances[neighbor]){
                distances[neighbor] = newDistance;
                pq.enqueue(neighbor,newDistance);
            }
        }
    }
    return distances
}
class MinPriorityQueue {
    constructor(){
         this.queue =[];

    }
    enqueue(value, priority){
        this.queue.push({element:value,priority});
        this.queue.sort((a,b) => a.priority - b.priority);

    }
    dequeue(){
        return this.queue.shift();

    }
    isEmpty(){
        return this.queue.length === 0;
    }
}

const weightedGraph ={
    0 : [[1, 4], [2, 1]],
    1 : [[3, 1]],
    2 : [[1, 2], [3, 5]],
    3 : []
}

console.log(djikstra(weightedGraph, 0));