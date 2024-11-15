class TreeNode {
    constructor(value){
        this.value = value;
        this.children = [];
    }
    addChild(child){
        this.children.push(child);
    }
}

class Tree{
    constructor(rootValue){
        this.root = new TreeNode(rootValue);
    }
    insert(parentValue,childValue){
        const parentNode = this.find(this.root,parentValue);
        if(parentNode){
            parentNode.addChild( new TreeNode(childValue));
        } else {
            console.log(`Parent node with the value ${parentNode} not found.`);
        }
    }
    find(node,value){
        if(node.value === value){
            return node;
        }
        for(let child of node.children){
            const result = this.find(child,value);
            if(result){
                return result;
            }
        }
        return null;
    }
    print(node = this.root , level =0){
        console.log(" ".repeat(level) + node.value);
        for( const child of node.children){
            this.print(child, level+1);
        }
    }
}

const myTree  = new Tree("root");
myTree.insert("root","child1");
myTree.insert("root","child2");
myTree.insert("child1","child1.1");
myTree.insert("child1", "child1.2");
myTree.insert("child2","child2.1");
console.log("tree structure");
myTree.print();
const node = myTree.find(myTree.root,"child1");
console.log("found Node:",node ? node.value:"node.found");