class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            this._insertNode(this.root,newNode);
        }
    }
    _insertNode(node, newNode){
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
    findClosestValue(target){ 
        return this._findClosestValue(this.root, target, this.root.value);
    }

    _findClosestValue(node,target, closest){
        if(node === null) return closest;
        if(Math.abs(target - node.value) < Math.abs(target- closest)){
            closest = node.value;
        }
        if(target < node.value && node.left !== null){
            return this._findClosestValue(node.left, target, closest);
        } else if (target> node.value && node.right !== null) {
            return this._findClosestValue(node.right, target, closest);
        } else {
            return closest;
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);
bst.insert(14);

console.log("Closest value to 12:", bst.findClosestValue(12)); 
console.log("Closest value to 23:", bst.findClosestValue(23));