class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

function levelOrderTraversal(root){
    if(!root) return [];
    let queue = [root];
    let result  = [];
    while(queue.length > 0){
        let level = [];
        let size = queue.length;
        for(let i = 0; i< size; i++){
            let node = queue.shift();
            level.push(node.value);
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(levelOrderTraversal(root));