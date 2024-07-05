function weightedStrings(s, queries) {
    const weights = new Set();
    let currentWeight = 0;
    let currentChar = '';
    console.log("Perhitungan bobot:");

    // Menghitung bobot untuk setiap substring
    for (let char of s) {
        if (char === currentChar) {
            currentWeight += char.charCodeAt(0) - 96;
        } else {
            currentWeight = char.charCodeAt(0) - 96;
            currentChar = char;
        }
        weights.add(currentWeight);
        console.log(`${char}: ${currentWeight}`);
    }

    // Memeriksa setiap query
    console.log("\nHasil query:");
    return queries.map(query => {
        let result = weights.has(query) ? "Ya" : "Tidak";
        console.log(`${query} => ${result}`);
        return result;
    });
}

// Fungsi untuk menjalankan test case
function runTestCase(s, queries) {
    console.log(`\nInput string: "${s}"`);
    console.log(`Queries: [${queries.join(', ')}]`);
    let result = weightedStrings(s, queries);
    console.log(`Output: [${result.join(', ')}]\n`);
}

// Test case 1 (contoh yang diberikan)
runTestCase("abbcccd", [1, 3, 9, 8]);

// Test case 2
runTestCase("abcde", [1, 2, 3, 4, 5, 6]);

// Test case 3
runTestCase("zzz", [1, 2, 3, 4, 5, 6, 26, 52, 78]);