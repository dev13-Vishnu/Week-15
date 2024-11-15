// Problem 1: Implement a Trie
// Problem Statement: Design and implement a Trie (Prefix Tree) with the following functions:

// insert(word): Inserts a word into the trie.
// search(word): Returns true if the word is in the trie, false otherwise.
// startsWith(prefix): Returns true if there is any word in the trie that starts with the given prefix.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));      
console.log(trie.search("app"));        
console.log(trie.startsWith("app"));    
trie.insert("app");
console.log(trie.search("app"));        
