function findKthLargest(arr,k){
    const minHeap = arr.slice(0, k);
    buildMinHeap(minHeap);
    for(let i = k; i < arr.length;i++){
        if(arr[i] > minHeap[0]){
            minHeap[0] = arr[i];
            heapify(minHeap, k, 0);
        }
    }
    return minHeap[0];
}
function buildMinHeap(arr){
    for(let i = Math.floor(arr.length /2) -1; i >= 0; i--){
        heapify(arr, arr.length, i);
    }
}
function heapify(arr, size, rootIndex){
    let smallest = rootIndex;
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;
    if(left < size && arr[left] < arr[smallest]) smallest = left;
    if(right < size && arr[right] < arr[smallest]) smallest = right;
    if(smallest !== rootIndex){
        [arr[rootIndex], arr[smallest]] = [arr[smallest], arr[rootIndex]];
        heapify(arr, size, smallest);
    }
}

const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(`${k}th largest element:`, findKthLargest(arr,k));