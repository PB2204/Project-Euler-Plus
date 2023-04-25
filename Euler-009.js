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

function main() {
    let t = parseInt(readLine());
    for (let a0 = 0; a0 < t; a0++) {
        let n = parseInt(readLine());
        let maxProduct = -1;
        for (let a = 1; a <= n / 3; a++) {
            for (let b = a + 1; b <= n / 2; b++) {
                let c = n - a - b;
                if (a * a + b * b == c * c) {
                    let product = a * b * c;
                    if (product > maxProduct) {
                        maxProduct = product;
                    }
                }
            }
        }

        console.log(maxProduct);
    }
}