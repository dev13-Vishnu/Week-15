class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

function inorderTraversal(root, result =[]){
    if( root !== null){
        inorderTraversal(root.left, result);
        result.push(root.value);
        inorderTraversal(root.right,result);
    }
    return result;
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log("Inorder Traversal:",inorderTraversal(root));