class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return ;
        }
        this._insertNode(this.root, newNode);
    }
    _insertNode(node, newNode){
        if(node.value > newNode.value){
            if(!node.left){
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if(!node.right){
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
    inOrder(node = this.root, result =[]){
        if(node){
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
    isBst (node = this.root, min = -Infinity , max = Infinity){
        if(!node) return true;
        if(node.value <= min || node.value >= max) return false;
        return (this.isBst(node.left, min, node.value) && this.isBst(node.right, node.value, max));

    }
    findMin(){
        let current = this.root;
        while(current && current.left){
            current = current.left;
        }
        return current ? current.value: null;
    }
    findMax(){
        let current = this.root;
        while(current && current.right){
            current = current.right;
        }
        return current ? current.value : null;
    }
    contains(value){
        return this._search(this.root,value);
    }
    _search(node, value){
        if(!node) return false;
        if(node.value === value ) return true;
        return value < node.value ?
        this._search(node.left, value) :
        this._search(node.right, value)
    }
    delete(value){
        this.root =this._deleteNode(this.root, value);
    }
    _deleteNode(node, value){
        if(!node) return null;
        if(value < node.value){
            node.left = this._deleteNode(node.left, value);
        }else if(value > node.value){
            node.right = this._deleteNode(node.right, value);
        } else {
        if(!node.right) return node.left;
        if(!node.left) return node.right;
        let minRight = this._findMin(node.right).value;
        node.value = minRight;
        node.right = this._deleteNode(node.right, minRight);

        }
        return node;
    }
    _findMin(node){
        while(node.left) {
            node = node.left;
        }
        return node;
    }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log("In order Traversal:", bst.inOrder());
console.log("Is the tree BST:", bst.isBst());
console.log("Minimum value in bst:", bst.findMin());
console.log("Maximum value in Bst :", bst.findMax());
console.log("does the tree contains 8 :", bst.contains(8));
console.log("does the tree contains 17 :", bst.contains(17));
bst.delete(5);
console.log("In order Traversal:", bst.inOrder());
