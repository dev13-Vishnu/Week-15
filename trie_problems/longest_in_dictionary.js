// 3. Problem 3: Longest Word in Dictionary
// Problem Statement: Given a list of words, find the longest word in the dictionary that can be constructed by successively adding letters one by one as you traverse the trie. If there is more than one possible result, return the lexicographically smallest word.

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

    canBuildWord(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char].isEndOfWord) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

function longestWord(words) {
    words.sort();
    const trie = new Trie();
    let longest = "";

    for (const word of words) {
        trie.insert(word);
    }

    for (const word of words) {
        if (trie.canBuildWord(word) && (word.length > longest.length || (word.length === longest.length && word < longest))) {
            longest = word;
        }
    }

    return longest;
}

const words = ["w", "wo", "wor", "worl", "world"];
console.log(longestWord(words)); 
