class Trinode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new Trinode();
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Trinode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    findAllWords(){
        const result = [];
        const dfs = (node, path) => {
            if(node.isEndOfWord){
                result.push(path);
            }
            for(let[char, childNode] of Object.entries(node.children)){
                dfs(childNode, path + char);
            }
        }
        dfs(this.root,'');
        return result;
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("dog");


console.log(trie.findAllWords());