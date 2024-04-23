class MinHeap {
    constructor(){
        this.heap = [];
    }
    size(){
        return this.heap.length;
    }
    swap(idx1,idx2){
        [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]];
        return this.heap;
    }
    add(value){
        this.heap.push(value);
        this.bubbleUp();
    }
    pop(){
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    bubbleUp(){
        let index = this.heap.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        
        while(index > 0 && this.heap[index] < this.heap[parentIdx]){
            this.swap(index,parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    }
    bubbleDown(){
        let index = 0;
        let leftIdx = index * 2 + 1;
        let rightIdx = index * 2 + 2;
        
        while(
            (this.heap[leftIdx] && this.heap[index] > this.heap[leftIdx]) ||
            (this.heap[rightIdx] && this.heap[index] > this.heap[rightIdx])
            ){
              let smallerIdx = leftIdx;
              if(this.heap[rightIdx] && this.heap[smallerIdx] > this.heap[rightIdx]){
                  smallerIdx = rightIdx;
              }
              this.swap(index,smallerIdx);
              index = smallerIdx;
              leftIdx = index * 2 + 1;
              rightIdx = index * 2 + 2;
        }
    }
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
const heap = new MinHeap();
input.forEach((el,i) => {
    if(i >= 1){
    heap.add(+el)
    }
});

while(heap.size() > 1){
    const card1 = heap.pop();
    const card2 = heap.pop();
    let compareCount = card1 + card2;
    count += compareCount;
    heap.add(compareCount);
}

console.log(count);