class MinHeap{
    constructor(){
        this.heap = [];
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    getParentIndex(index){ return Math.floor((index - 1)/2);}
    getLeftChildIndex(index){ return 2 * index + 1};
    getRightChildIndex(index){return 2 * index + 2;}

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    remove(){
        if(this.heap.length === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    buildHeap(array){
        this.heap = array;
        for(let i = Math.floor(this.heap.length /2) -1; i >= 0;i --){
            this.heapifyDown(i);
        }
    }
    heapifyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            const parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    heapifyDown(index = 0){
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if(smallest !== index){
            this.swap (index, smallest);
            this.heapifyDown(smallest);
        }
    }
    getMin(){
        return this.heap[0];
    }
}

const minHeap = new MinHeap();
minHeap.buildHeap([10, 20, 15, 30, 40]);
console.log("Heap after building:", minHeap.heap);
minHeap.insert(5);
console.log("Heap after inserting 5:", minHeap.heap);
console.log("Removed minimum:", minHeap.remove());
console.log("Heap after removing minimum:", minHeap.heap);