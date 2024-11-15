// Problem 3: Merge K Sorted Arrays
// Given k sorted arrays, merge them into one sorted array.
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        if (this.heap.length > 1) {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        } else {
            this.heap.pop(); // remove the last element
        }
        return min;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].value <= this.heap[index].value) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    heapifyDown() {
        let index = 0;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < this.heap.length && this.heap[left].value < this.heap[smallest].value) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right].value < this.heap[smallest].value) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
function mergeKSortedArrays(arrays) {
    const minHeap = new MinHeap();
    const result = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            minHeap.insert({ value: arrays[i][0], arrayIndex: i, elementIndex: 0 });
        }
    }
    while (minHeap.heap.length > 0) {
        const { value, arrayIndex, elementIndex } = minHeap.extractMin();
        result.push(value);

        const nextElementIndex = elementIndex + 1;
        if (nextElementIndex < arrays[arrayIndex].length) {
            minHeap.insert({
                value: arrays[arrayIndex][nextElementIndex],
                arrayIndex: arrayIndex,
                elementIndex: nextElementIndex
            });
        }
    }
    return result;
}

const arrays = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
console.log("Merged sorted array:", mergeKSortedArrays(arrays));
