// Problem: K Largest Elements in a Stream Using a Min-Heap
// Problem Statement:
// Given a stream of integers and an integer k, design a data structure that will keep track of the k largest elements seen so far. Your data structure should support:

// insert(value): Add a new value to the stream.
// getKlargest(): Retrieve the current k largest elements from the stream in descending order.

class MinHeap{
    constructor(k){
        this.heap = [];
        this.k = k;
    }
    swap(i, j){
        [this.heap[i],this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
        if(this.heap.length > this.k){
            this.removeMin();
        }
    }
    removeMin(){
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
    }
    heapifyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            const parentIndex = Math.floor((index - 1) / 2);
            if(this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    heapifyDown(index = 0){
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }
        if(smallest !== index){
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
    getKlargest(){
        return this.heap.slice().sort((a,b) => b - a);
    }
}

const k = 3;
const minHeap = new MinHeap(k);

const stream = [10, 5 , 20, 30, 25, 15];

for(let value of stream){
    minHeap.insert(value);
    console.log(`Top ${k} largest elements:`, minHeap.getKlargest());
}