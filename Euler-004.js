process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function isPalindrome(n) {
    n = n.toString();
    let len = n.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (n[i] !== n[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function largestPalindrome(n) {
    let maxPalindrome = 0;
    let a, b, product;
    for (a = 999; a >= 100; a--) {
        for (b = a; b >= 100; b--) {
            product = a * b;
            if (product < maxPalindrome) {
                break;
            }
            if (product < n && isPalindrome(product)) {
                maxPalindrome = product;
            }
        }
    }
    return maxPalindrome;
}

function main() {
    let t = parseInt(readLine());
    for (let a0 = 0; a0 < t; a0++) {
        let n = parseInt(readLine());
        console.log(largestPalindrome(n));
    }
}