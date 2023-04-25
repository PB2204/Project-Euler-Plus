function processData(input) {
    input = input.trim().split('\n');
    const v = [];
    const two = [1];
    let power = 0;
    v.push(1);
    for (; power <= 1e4;) {
        let digSum = 0;
        let carry = 0;
        for (let i = 0; i < two.length; i++) {
            carry += two[i] * 2;
            two[i] = carry % 10;
            digSum += two[i];
            carry = Math.floor(carry / 10);
        }
        while (carry !== 0) {
            two.push(carry % 10);
            digSum += carry % 10;
            carry = Math.floor(carry / 10);
        }
        v.push(digSum);
        power++;
    }
    const t = Number(input[0]);
    for (let i = 1; i <= t; i++) {
        const n = Number(input[i]);
        console.log(v[n]);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});