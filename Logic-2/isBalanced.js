function isBalanced(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (char === ' ') continue; // Mengabaikan spasi
        if (brackets[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || brackets[stack.pop()] !== char) {
                return "TIDAK";
            }
        }
    }

    return stack.length === 0 ? "YA" : "TIDAK";
}

// Contoh penggunaan
console.log(isBalanced("{[()]}")); // YA
console.log(isBalanced("{ [ ( ] ) }")); // TIDAK
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")); // YA