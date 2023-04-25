function processData(input) {
    input = input.trim().split('\n');
    const t = Number(input[0]);
    let currentLine = 1;
    for (let i = 0; i < t; i++) {
        const n = Number(input[currentLine++]);
        const v = [];
        const dp = [];
        for (let i = 0; i < n; i++) {
            v.push(input[currentLine++].trim().split(' ').map(Number));
            dp.push(new Array(n).fill(-1));
        }
        for (let i = n - 1; i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                if (i == n - 1) {
                    dp[i][j] = v[i][j];
                } else {
                    dp[i][j] = v[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
                }
            }
        }
        console.log(dp[0][0]);
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