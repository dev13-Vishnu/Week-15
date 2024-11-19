class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
    addChild(child){
        this.children.push(child);
    }
}
class Tree {
    constructor(rootValue){
        this.root = new TreeNode(rootValue);
    }
    insert(parentValue, childValue){
        const parentNode = this.find(this.root, parentValue);
        if(parentNode){
            parentNode.addChild(new TreeNode(childValue));
        } else {
            console.log(`parent node with the value ${parentValue} did not found.`);
        }
    }
    find(node,value){
        if(node.value === value) return node;
        for(let child of node.children){
            let result = this.find(child, value);
            if(result){
                return result;
            }
        }
        return null;
    }
    print(node = this.root, level = 1){
        console.log(" ".repeat(level*2)+ node.value);
        for(let child of node.children){
            this.print(child, level +1);
        }
    }
    search(value){
        const node = this.find(this.root, value);
        return node !== null;
    }
    delete(value){
        if(this.root.value === value){
            console.log("cannot delete the root node.");
            return ;
        }
        const parentNode = this.findParent(this.root, value)
        if(!parentNode){
            console.log(`parent Node with value '${value} not found.`);
            return;
        }
        parentNode.children = parentNode.children.filter(child => child.value !== value);
    }
    findParent(node,value){
        if(!node) return null;
        for(let child of node.children){
            if(child.value === value){
                return node;
            }
        }
        for(let child of node.children){
            let result = this.findParent(child,value);
            if(result) return result;
        }
        return null;
    }
}
const myTree = new Tree("root");
myTree.insert("root","child1");
myTree.insert("root","child2");
myTree.insert("child1","child1.1");
myTree.insert("child1", "child1.2");
myTree.insert("child2", "child2.1");
console.log("tree structure");
myTree.print();
console.log("searched Item",myTree.search("child1"));
console.log("searched Item",myTree.search("child3"));
const node = myTree.find(myTree.root,"child1");
console.log("found Node:", node ? node.value : "node.found");
console.log("Deleting child");
myTree.delete("child1");
myTree.print();
console.log("Deleting child3 (non - existent)");
myTree.delete("child3");
myTree.print();
console.log("Trying to delete the root node");
myTree.delete("root");
myTree.print();