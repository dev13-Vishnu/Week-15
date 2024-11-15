class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
        this.frequency = 0;
    }
}

class AutoCompleteSystem{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        node.frequency +=1;
    }
    autocomplete(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return [];

            }
            node = node.children[char];
        }
        const suggestions =[];

        const dfs = (currentNode,path) => {
            if(currentNode.isEndOfWord){
                suggestions.push({word:path, frequency :currentNode.frequency});
            }
            for(let [char, childNode] of Object.entries(currentNode.children)){
                dfs(childNode, path+ char);

            }
        };
        dfs(node, prefix);

        suggestions.sort((a,b) =>{
            if(b.frequency === a.frequency){
                return a.word.localeCompare(b.word);
            }
            return b.frequency - a.frequency;
        });
        return suggestions.map(s=> s.word);

    }
}

const system = new AutoCompleteSystem();
system.insert("apple");
system.insert("app");
system.insert("application");
system.insert("app");
system.insert("apple");
system.insert("appetite");
system.insert("apple");
system.insert("app");

console.log(system.autocomplete("app"));
console.log(system.autocomplete("appl"));
console.log(system.autocomplete("xyz"));
