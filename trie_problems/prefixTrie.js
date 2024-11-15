class Node{
    constructor(){
        this.children ={};
        this.isEndOfWord = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let node = this.root;
        for (let char of word){
            if(!node.children[char]){
                node.children[char] = new Node;
            }
            node = node.children[char];

        }
        node.isEndOfWord= true;
    }
    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    startsWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
    searchRoot(word){
        let node = this.root;
        let root = '';
        for (const char of word){
            if(!node.children[char]) break;
            node= node.children[char];
            root += char;
            if(node.isEndOfWord) return root;
        }
        return word;

    }
}
const trie = new Trie;
console.log(trie.insert("apple"));
console.log(trie.search("apple"));
console.log(trie.search("iphone"))
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
function longestWord(words){
    const root = new Node();
    for(let word of words){
        let node = root;
        for(let char of word){
            if(!node.children[char]) {
                node.children[char] = new Node();
            }
            node =node.children[char];
        }
        node.isEndOfWord = true;
    }
    let longest = '';
    function dfs(node, path){
        if(node.isEndOfWord && path.length > longest.length){
            longest = path;
        }
        for(const [char, childNode] of Object.entries(node.children)){
            if(childNode.isEndOfWord){
                dfs(childNode, path+char);
            }
        }
    }
    dfs(root,'');
    return longest;
}
const words = ["w", "wo", "wor", "worl", "world"];
console.log("whichone is the longest word among the array:",longestWord(words));
const words1 = ["a", "banana", "app", "appl", "ap", "apple", "apply"];
console.log("whichone is the longest word among the array:",longestWord(words1));

function replaceWord(dictionaty,sentence){
    const trie = new Trie();
    for(const root of dictionaty){
        trie.insert(root);
    }
    return sentence.split(' ').map(word => trie.searchiRoot(word)).join(' ');

}

const dictionary = ["cat", "bat", "rat"];
const sentence = "the cattle was rattled by the battery";
console.log(replaceWord(dictionary, sentence));