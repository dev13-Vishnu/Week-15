// 1. Implement a Trie (Prefix Tree)
// Problem:
// Design and implement a data structure for a Trie (prefix tree). Implement the following methods:

// insert(word): Inserts a word into the trie.
// search(word): Returns true if the word is in the trie.
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
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
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
