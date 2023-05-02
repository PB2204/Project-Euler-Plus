function processData(input) {
    let amicable = [
        220, 284, 1184, 1210, 2620, 2924, 5020, 5564, 6232, 6368, 10744, 10856, 12285, 14595,
        17296, 18416, 63020, 66928, 66992, 67095, 69615, 71145, 76084, 79750, 87633, 88730
    ];

    input = input.trim().split('\n');
    let t = parseInt(input[0]);
    let curLine = 1;

    while (t--) {
        let n = parseInt(input[curLine++]);
        let total = 0;

        for (let it of amicable) {
            if (it >= n) break;

            total += it;
        }
        console.log(total);
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