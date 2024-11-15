// Question 3: Delete a Node in a Binary Search Tree
// Problem Statement: Implement a function to delete a node from a binary search tree. The function should maintain the BST property after deletion. You should consider three cases:

// 1. The node to be deleted is a leaf (no children).
// 2. The node to be deleted has one child.
// 3. The node to be deleted has two children (replace it with its in-order successor).

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function deleteNode(root, val) {
    if (!root) return null;

    if (val < root.val) {
        root.left = deleteNode(root.left, val);
    } else if (val > root.val) {
        root.right = deleteNode(root.right, val);
    } else {
        if (!root.left) return root.right; 
        if (!root.right) return root.left;

        let minLargerNode = root.right;
        while (minLargerNode.left) {
            minLargerNode = minLargerNode.left;
        }
        root.val = minLargerNode.val;
        root.right = deleteNode(root.right, minLargerNode.val);
    }
    return root;
}

function insertIntoBST(root, val) {
    if (!root) {
        return new TreeNode(val);
    }

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}
const root = new TreeNode(5);
insertIntoBST(root, 3);
insertIntoBST(root, 8);
insertIntoBST(root, 2);
insertIntoBST(root, 4);
insertIntoBST(root, 6);
insertIntoBST(root, 9);

const newRoot = deleteNode(root, 3);
console.log(JSON.stringify(newRoot, null, 2));
