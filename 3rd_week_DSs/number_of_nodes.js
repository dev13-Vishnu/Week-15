class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}
function countNodes(root){
    if(!root) return -1;

    let count = 1;
    for(let child of root.children){
        count += countNodes(child);
    }

    return count;
}

const root = new TreeNode(1);
root.children.push(new TreeNode(2));
root.children.push(new TreeNode(3));
root.children.push(new TreeNode(4));
root.children[1].children.push(new TreeNode(5));
root.children[1].children.push(new TreeNode(6));

console.log("The total number of Nodes in the tree is :", countNodes(root));