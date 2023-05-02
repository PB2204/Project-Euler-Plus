function processData(input) {
    input = input.trim().split('\n');
    let t = parseInt(input.shift());
    const GetFactoradic = (n, size) => {
        let fact = [];
        let index = 1;

        while (size--) {
            let rem = n % index;

            fact.push(rem);
            n = Math.floor(n / index);
            index++;
        }
        fact.reverse();
        return fact;
    }

    while (t--) {
        let n = parseInt(input.shift());

        let s = "abcdefghijklm";
        let ans = "";

        if (n == 1) {
            console.log(s);
            continue;
        }
        --n;
        let order = GetFactoradic(n, s.length);

        for (let i = 0; i < order.length; i++) {
            let c = s[order[i]];
            s = s.slice(0, order[i]) + s.slice(order[i] + 1);
            ans += c;
        }
        console.log(ans);
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