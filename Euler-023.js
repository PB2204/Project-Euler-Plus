function processData(input) {
    input = input.trim().split('\n');
    let abundant = [];
    let divisorSums = new Array(100010).fill(1);
    let abundantSums = new Array(28130).fill(false);
    for (let i = 2; i <= Math.sqrt(28123); i++) {
        for (let j = i; i * j <= 28123; j++) {
            let prod = i * j;
            divisorSums[prod] += (i == j) ? i : i + j;

            if (divisorSums[prod] > prod) {
                abundant.push(prod);
                divisorSums[prod] = -999999;
            }
        }
    }
    abundant.sort((a, b) => a - b);

    for (let i = 0; i < abundant.length; i++) {
        if (abundant[i] >= 14062) break;

        for (let j = i; j < abundant.length; j++) {
            let sum = abundant[i] + abundant[j];

            if (sum > 28123) break;
            abundantSums[sum] = true;
        }
    }

    let t = Number(input.shift());

    while (t--) {
        let n = Number(input.shift());

        if (n > 28123 || abundantSums[n] == true) console.log("YES");
        else console.log("NO");
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