class Node{
    constructor(){
        this.value = null;
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
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(current.value === newNode.value) return undefined;
            if (newNode.value < current.value) {
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    // Tree Structure Verification function
    isValidBST(node = this.root, min = null, max = null) {
        // Base case: if we reach a null node, it’s valid
        if (node === null) return true;

        // Check if the current node's value violates the min/max constraint
        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }

        // Recursively check the left and right subtrees with updated constraints
        return (
            this.isValidBST(node.left, min, node.value) && // Left subtree
            this.isValidBST(node.right, node.value, max)   // Right subtree
        );
    }
}
let myTree = new BST();
// myTree.insert(47);
// myTree.insert(21);
// myTree.insert(76);
// myTree.insert(18);
// myTree.insert(27);
// myTree.insert(52);
// myTree.insert(82);

console.log("Is the tree a valid BST?");
console.log(myTree.isValidBST());  // Expected output: true