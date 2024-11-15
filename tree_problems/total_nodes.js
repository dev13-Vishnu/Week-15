class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}
function countNodes(node){
    if(!node){
        return 0;
    }
    let count = 1;
    for(let child of node.children){
        count += countNodes(child);

    }
    return count;
}

const root = new TreeNode(1);

root.children.push(new TreeNode(2),new TreeNode(3));
root.children[0].children.push(new TreeNode(4),new TreeNode(5));

console.log("Total Nodes:", countNodes(root));