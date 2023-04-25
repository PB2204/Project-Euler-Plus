function processData(input) {
    let lines = input.trim().split('\n');
    let sum = BigInt(0);
    for (let i = 1; i < lines.length; i++) {
        sum += BigInt(lines[i]);
    }
    let firstTenDigits = sum.toString().substring(0, 10);
    console.log(firstTenDigits);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});