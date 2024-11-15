    class TreeNode{
        constructor(value){
            this.value= value;
            this.children = [];

        }
    }

    function printLeafNodes(node){
        if(!node) return;
        if(node.children.length === 0){
            console.log("Leaf Node :", node.value);
        } else {
            for(let child of node.children){
                printLeafNodes(child);
            }
        }
    }

    const root = new TreeNode(1);
    
    root.children.push(new TreeNode(2), new TreeNode(3));
    root.children[0].children.push(new TreeNode(4), new TreeNode(5));
    
    printLeafNodes(root);

