class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

function isValidBST( root, min = -Infinity, max = Infinity){
    if (root === null) {
        return true;
    }
    if(root.value <= min || root.value >= max){
        return false;
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log("is Valid BST:",isValidBST(root));

const root2 = new TreeNode(5);
root2.left = new TreeNode(1);
root2.right = new TreeNode(4);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(6);

console.log("is valid BST:", isValidBST(root2));