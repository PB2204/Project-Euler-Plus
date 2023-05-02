function processData(input) {
    let nameVals = new Map();
    let namePos = new Map();

    input = input.trim().split('\n');
    let n = parseInt(input[0]);
    let names = input.slice(1, n + 1);

    for (let i = 0; i < n; i++) {
        let name = names[i];
        let worth = 0;
        for (let c of name) {
            worth += c.charCodeAt(0) - 64;
        }
        nameVals.set(name, worth);
    }

    names.sort();
    for (let i = 0; i < n; i++) {
        namePos.set(names[i], i + 1);
    }

    let q = parseInt(input[n + 1]);
    let queries = input.slice(n + 2);

    for (let i = 0; i < q; i++) {
        let query = queries[i];
        console.log(nameVals.get(query) * namePos.get(query));
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