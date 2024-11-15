// Question 4: Find the Minimum and Maximum Values in a Binary Search Tree
// Problem Statement: Implement two functions to find the minimum and maximum values in a binary search tree. The minimum value is found by traversing the leftmost path, while the maximum value is found by traversing the rightmost path.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
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

const root = new TreeNode(5);
insertIntoBST(root, 3);
insertIntoBST(root, 8);
insertIntoBST(root, 2);
insertIntoBST(root, 4);
insertIntoBST(root, 6);
insertIntoBST(root, 9);

const newRoot = deleteNode(root, 3);
console.log(JSON.stringify(newRoot, null, 2));
