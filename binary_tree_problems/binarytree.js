class Node {
    constructor (value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        } 
        const queue = [this.root];
        while(queue.length > 0){
            const current = queue.shift();
            if(!current.left){
                current.left = newNode;
                return; 
            } else {
                queue.push(current.left);
            }
            if(!current.right){
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);  
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
    preOrder(node =this.root, result= []){
        if(node){
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }
    postOrder(node = this.root , result= []){
        if(node){
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
    height(node = this.root){
        if(!node) return -1;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    countNodes(node = this.root){
        if(!node) return 0;
        return 1+ this.countNodes(node.left) + this.countNodes(node.right);
    }
    findMin(node = this.root){
        if(!node) return Infinity;
        let leftMin = this.findMin(node.left);
        let rightMin = this.findMin(node.right);
        return node.value < leftMin && node.value < rightMin ? node.value : leftMin < rightMin ? leftMin : rightMin;
    }
    findMax(node = this.root){
        if(!node) return -Infinity;
        let leftMax = this.findMax(node.left);
        let rightMax = this.findMax(node.right);
        return node.value > leftMax && node.value > rightMax ? node.value : leftMax > rightMax ? leftMax : rightMax;
    }
    isBst(node = this.root, min = -Infinity, max = Infinity){
        if(!node) return true;
        if(node.value <= min || node.value >= max) return false;
        return this.isBst(node.left, min, node.value) && this.isBst(node.right , node.value, max);
    }
    levelOrder(root = this.root){
        if(!root) return [];
        let queue = [root];
        let result = [];
        while(queue.length){
            const level = [];
            const length =  queue.length;
            for(let i =0; i< length ; i++){
                const node = queue.shift();
                level.push(node.value);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);

            }
            result.push(level);
        }
        return result;
    }
    areIdentical(node1 = this.root, node2 = this.root){
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        return (
            node1.value === node2.value &&
            this.areIdentical(node1.left , node2.left) &&
            this.areIdentical(node1.right ,node2.right)
        )
    }
    countLeaves(node = this.root){
        if(!node) return 0;
        if(!node.left && !  node.right) return 1;
        return this.countLeaves(node.left) + this.countLeaves(node.right);

    }


}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);

console.log("In Order Traversal:", tree.inOrder());
console.log("preOrder traversal:", tree.preOrder());
console.log("postOrder Traversal:", tree.postOrder());
console.log("tree height:", tree.height());
console.log("number of nodes:", tree.countNodes());
console.log("Minimum value is:", tree.findMin());
console.log("Maximum value is:", tree.findMax());
console.log("is binary Tree a binary Search Tree:", tree.isBst());
console.log("level order traversal:", tree.levelOrder());

const tree1 = new BinaryTree();
const tree2 = new BinaryTree();

[10, 5, 3, 7, 15, 13, 17].forEach(value => {
    tree1.insert(value);
    tree2.insert(value);
});

console.log("are these tree both are identical:",tree1.areIdentical(tree1, tree2));

console.log("number of leaf nodes :", tree.countLeaves());










