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

function fibonacci_sum_even(n) {
    // initialize the variables
    let sum_even = 0;
    let a = 1, b = 2;

    while (b <= n) {
        if (b % 2 === 0) {
            sum_even += b;
        }
        [a, b] = [b, a + b];
    }

    return sum_even;
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let i = 0; i < t; i++) {
        const n = BigInt(readLine().trim());

        const result = fibonacci_sum_even(n);
        console.log(result.toString());
    }
}