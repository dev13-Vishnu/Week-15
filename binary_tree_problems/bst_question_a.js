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
            this._insertNode(this.root, newNode);
        }
    }
    _insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if(node.right == null){
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
    contains(value){
        return this._search(this.root, value);
    }
    _search(node, value){
        if(node === null ) return false;
        if(node.value ===  value) return true;
        return value < node.value ? this._search(node.left, value) : this._search(node.right, value);
    }
    delete(value){
        this.root = this._deleteNode(this.root,value);
    }
    _deleteNode(node,value){
        if(node === null) return null;
        if(value < node.value){
            node.left = this._deleteNode(node.left, value);
        } else if ( value > node.value){
            node.right = this._deleteNode(node.right, value);
        } else {
            if(node.left === null)return node.right;
            if(node.right === null) return node.left;
            node.value = this._findMin(node.right).value;
            node.right = this._deleteNode(node.right, node.value);
        }
        return node;
    }
    _findMin(node){
        while(node.left !== null){
            node = node.left;
        }
        return node;
    }
    inOrder() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }
    _inOrder(node, result){
        if(node !== null){
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result);
        }
    }
    preOrder(){
        const result = [];
        this._preOrder(this.root, result);
        return result;
    }
    _preOrder(node, result){
        if(node !== null){
            result.push(node.value);
            this._preOrder(node.left, result);
            this._preOrder(node.right, result);
        }
    }
    postOrder(){
        const result =[];
        this._postOrder(this.root, result);
        return result;
    }
    _postOrder(node, result){
        if(node !== null){
            this._postOrder(node.left, result);
            this._postOrder(node.right, result);
            result.push(node.value);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log(" In-order Traversal:", bst.inOrder());
console.log("Pre-order Traversal:", bst.preOrder());
console.log("Post-order Traversal:", bst.postOrder());

console.log("Contains 7:",bst.contains(7));
console.log("contais 20:", bst.contains(2));

bst.delete(15);
console.log("In-order traversal after deleting 15:", bst.inOrder());


