class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

function maxDepth(root){
    if(root=== null){
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth,rightDepth)+1
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Maximum Depth:",maxDepth(root));