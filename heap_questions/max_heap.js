class MaxHeap{
    constructor(){
        this.heap = [];
    }
    swap (index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    getParentIndex(index){
        return Math.floor((index -1 ) /2);
    }
    getLeftChildIndex(index){
        return 2 * index + 1;
    }
    getRightChildIndex(index){
        return 2 * index + 2;
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    remove(){
        if(this.heap.length === 0) return null;
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }
    buildHeap(array){
        this.heap = array;
        for(let i = Math.floor(this.heap.length/2) - 1; i >= 0; i--){
            this.heapifyDown(i);
        }
    }
    heapifyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            const parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex] >= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    heapifyDown(index = 0){
        let largest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left;
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right;
        }
        if(largest !== index){
            this.swap(index ,largest)
            this.heapifyDown(largest);
        }
    }
    getMax(){
        return this.heap[0];
    }
}

const maxHeap = new MaxHeap();
maxHeap.buildHeap([10, 20, 15, 30, 40]);
console.log("Heap after building :", maxHeap.heap);
maxHeap.insert(50);
console.log("Heap after inserting 50:", maxHeap.heap);

console.log("Removed Maximum:", maxHeap.remove());
console.log("Heap after Removing maximum:", maxHeap.heap);