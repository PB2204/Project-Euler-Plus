function processData(input) {
    input = input.trim().split('\n');
    const mod = 1e9 + 7;
    let index = 0;
    const t = Number(input[index++]);
    for (let i = 0; i < t; i++) {
        const [n, m] = input[index++].trim().split(' ').map(Number);
        const v = Array.from({ length: n + 1 }, () => Array(m + 1).fill(1));
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                v[i][j] = (v[i - 1][j] + v[i][j - 1]) % mod;
            }
        }
        console.log(v[n][m]);
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