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

function getAbsoluteDifference(n) {
    let sum_of_squares = (n * (n + 1) * (2 * n + 1)) / 6;
    let square_of_sum = Math.pow((n * (n + 1)) / 2, 2);
    return Math.abs(sum_of_squares - square_of_sum);
}

function main() {
    let t = parseInt(readLine());
    for (let a0 = 0; a0 < t; a0++) {
        let n = parseInt(readLine());
        let result = getAbsoluteDifference(n);
        console.log(result);
    }
}