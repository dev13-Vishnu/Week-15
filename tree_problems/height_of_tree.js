class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

function treeHeight(node){
    if(!node) return 0;
    let maxChildHeight = 0;
    for(let child of node.children){
        maxChildHeight = Math.max(maxChildHeight,treeHeight(child));
        
    }
    return 1 + maxChildHeight;
}
const root = new TreeNode(1);
root.children.push( new TreeNode(2), new TreeNode(3));
root.children[0].children.push(new TreeNode(4), new TreeNode(5));
console.log(" Tree height:",treeHeight(root));