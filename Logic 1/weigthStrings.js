function weightedStrings(s, queries) {
    const weights = new Set();
    let currentWeight = 0;
    let currentChar = '';

    // Menghitung bobot untuk setiap substring
    for (let char of s) {
        if (char === currentChar) {
            currentWeight += char.charCodeAt(0) - 96;
        } else {
            currentWeight = char.charCodeAt(0) - 96;
            currentChar = char;
        }
        weights.add(currentWeight);
    }

    // Memeriksa setiap query
    return queries.map(query => weights.has(query) ? "Ya" : "Tidak");
}

const s = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(s, queries));