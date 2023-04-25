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
function sumOfPrimes(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            sum += i;
        }
    }

    return sum;
}

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const n = parseInt(readLine());
        const result = sumOfPrimes(n);
        console.log(result);
    }
}