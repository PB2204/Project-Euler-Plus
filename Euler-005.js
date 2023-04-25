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

/////////////// ignore above this line ////////////////////

function main() {
    let t = parseInt(readLine());
    for (let a0 = 0; a0 < t; a0++) {
        let n = parseInt(readLine());
        let lcm = 1;
        for (let i = 2; i <= n; i++) {
            lcm = (lcm * i) / gcd(lcm, i);
        }
        console.log(parseInt(lcm));
    }
}

function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}