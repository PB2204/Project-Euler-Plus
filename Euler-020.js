function processData(input) {
    input = input.trim().split('\n').slice(1);
    for (let i = 0; i < input.length; i++) {
        let n = parseInt(input[i]);
        let v = [1];
        let sc = 1;
        while (sc <= n) {
            mul(v, sc);
            sc++;
        }
        let sum = 0;
        for (let j = 0; j < v.length; j++) {
            sum += v[j];
        }
        console.log(sum);
    }
}
function mul(v, x) {
    let carry = 0;
    for (let i = 0; i < v.length; i++) {
        carry += v[i] * x;
        v[i] = carry % 10;
        carry = Math.floor(carry / 10);
    }
    while (carry !== 0) {
        v.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
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