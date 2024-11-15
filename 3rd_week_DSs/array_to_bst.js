class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sortedArrayToBST(nums) {
    if (!nums.length) return null;

    function convertToBST(left, right) {
        if (left > right) return null;

        // Calculate the middle index
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]); // Create a node with the middle value

        // Recursively build the left and right subtrees
        node.left = convertToBST(left, mid - 1); // Left subtree
        node.right = convertToBST(mid + 1, right); // Right subtree

        return node; // Return the created node
    }

    return convertToBST(0, nums.length - 1); // Start recursion with the entire array
}

// Example Usage:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const root = sortedArrayToBST(nums);
console.log(root);
