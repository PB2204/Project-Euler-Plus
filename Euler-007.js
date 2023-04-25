process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

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

function main() {
    var t = parseInt(readLine());
    var maxN = 10000;
    var primes = generatePrimes(maxN);
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        console.log(primes[n - 1]);
    }
}

function generatePrimes(maxN) {
    var primes = [];
    var isPrime = new Array(maxN + 1).fill(true);
    isPrime[0] = false; isPrime[1] = false;
    for (var p = 2; p <= maxN; p++) {
        if (isPrime[p]) {
            primes.push(p);
            for (var i = p * p; i <= maxN; i += p) {
                isPrime[i] = false;
            }
        }
    }

    return primes;
}