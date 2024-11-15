class MinHeap{
    constructor(){
        this.heap = [];

    }
    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.heap.length - 1;
        while( index > 0){
        const parentIndex = Math.floor((index - 1) / 2);
        if(this.heap[index] >= this.heap[parentIndex]) break;
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
        index = parentIndex;
        }
    }
    remove(){
        if(this.heap.length === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    bubbleDown(){
        let index = 0;
        const length = this.heap.length;
        while(true){
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let smallest = index;

            if(leftIndex < length && this.heap[leftIndex] < this.heap[smallest] ){
                smallest =  leftIndex;
            }
            if(rightIndex < length && this.heap[rightIndex] < this.heap[smallest]){
                smallest = rightIndex;
            }
            if(index === smallest) break;
            [this.heap[index],this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class MaxHeap{
    constructor(){
        this.heap= [];
    }
    insert(value){
        this.heap.push(value)
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.heap.length - 1;
        while( index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            if(this.heap[index]<=this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    remove(){
        if(this.heap.length === 0) return null;
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }
    bubbleDown(){
        let index = 0;
        const length = this.heap.length;
        while(true){
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let largest = index;

            if(leftIndex < length && this.heap[leftIndex] > this.heap[largest]){
                largest = leftIndex;
            }
            if(rightIndex < length && this.heap[rightIndex] > this.heap[largest]){
                largest = rightIndex;
            }
            if(index === largest) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);

console.log(minHeap.remove());
console.log(minHeap.remove());

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(3);

console.log(maxHeap.remove());
console.log(maxHeap.remove());
