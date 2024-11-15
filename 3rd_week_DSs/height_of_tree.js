class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];

    }
}

function heightOfTree(root){
    if (!root) return -1;
    let maxChildHeight = -1;
    for(let child of root.children){
        maxChildHeight = Math.max( maxChildHeight, heightOfTree(child));
    }
    return maxChildHeight +1;
}

const root = new TreeNode(1);
root.children.push(new TreeNode(2));
root.children.push(new TreeNode(3));
root.children.push(new TreeNode(4));
root.children[1].children.push(new TreeNode(5));
root.children[1].children.push(new TreeNode(6));

console.log("The hight of tree is:", heightOfTree(root));