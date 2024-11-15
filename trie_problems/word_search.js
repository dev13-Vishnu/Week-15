// 2. Problem 2: Word Search II
// Problem Statement: Given an m x n board of letters and a list of words, return all words from the list that can be found on the board. Words can be constructed from letters of sequentially adjacent cells (horizontally or vertically), but the same cell may not be reused within a word.

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
}

function findWords(board, words) {
    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }

    const result = new Set();
    const rows = board.length;
    const cols = board[0].length;

    function dfs(node, x, y, path) {
        if (node.isEndOfWord) {
            result.add(path);
        }

        if (x < 0 || x >= rows || y < 0 || y >= cols || !node.children[board[x][y]]) return;

        const char = board[x][y];
        board[x][y] = '#'; 
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (const [dx, dy] of directions) {
            dfs(node.children[char], x + dx, y + dy, path + char);
        }
        board[x][y] = char; // unmark
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (trie.root.children[board[i][j]]) {
                dfs(trie.root, i, j, "");
            }
        }
    }

    return Array.from(result);
}

const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
];
const words = ["oath", "pea", "eat", "rain"];
console.log(findWords(board, words)); 
