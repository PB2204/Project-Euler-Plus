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
        let n_temp = readLine().split(' ');
        let n = parseInt(n_temp[0]);
        let k = parseInt(n_temp[1]);
        let num = readLine();
        let maxProduct = 0;
        for (let i = 0; i <= n - k; i++) {
            let product = 1;
            for (let j = 0; j < k; j++) {
                product *= parseInt(num.charAt(i + j));
            }
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
        console.log(maxProduct);
    }
}