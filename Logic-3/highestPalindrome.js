function highestPalindrome(s, k, left = 0) {
    if (k < 0) return '-1';
    if (left >= Math.floor(s.length / 2)) return s;

    let right = s.length - 1 - left;
    if (s[left] !== s[right]) {
        let leftChange = s.slice(0, left) + s[right] + s.slice(left + 1);
        let rightChange = s.slice(0, right) + s[left] + s.slice(right + 1);
        
        let leftResult = highestPalindrome(leftChange, k - 1, left + 1);
        let rightResult = highestPalindrome(rightChange, k - 1, left + 1);
        
        return leftResult > rightResult ? leftResult : rightResult;
    }
    
    return highestPalindrome(s, k, left + 1);
}

// Fungsi untuk menjalankan test case
function runTestCase(s, k) {
    console.log(`Input: s = "${s}", k = ${k}`);
    let result = highestPalindrome(s, k);
    console.log(`Output: ${result}`);
    console.log('---');
}

// Test case 1
runTestCase("3943", 1);

// Test case 2
runTestCase("932239", 2);

// Test case 3
runTestCase("11119111", 3);