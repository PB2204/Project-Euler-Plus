function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (n / i === i) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

function findTriangleNumberWithDivisors(divisors) {
    let n = 1;
    let triangleNumber = 1;
    while (countDivisors(triangleNumber) <= divisors) {
        n++;
        triangleNumber = n * (n + 1) / 2;
    }
    return triangleNumber;
}

function processData(input) {
    const lines = input.split("\n");
    const testCases = Number(lines[0]);
    for (let i = 1; i <= testCases; i++) {
        const divisors = Number(lines[i]);
        console.log(findTriangleNumberWithDivisors(divisors));
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