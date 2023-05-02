function processData(input) {
    var n = input.split(' ')[0];
    var k = input.split(' ')[1];
    var ans = 0;

    for (var i = 1; i < n; i++) {
        var s = i + '';

        if (s === s.split('').reverse().join('')) {
            var converted = i.toString(k);

            if (converted == converted.split('').reverse().join('')) ans += i;
        }
    }
    console.log(ans);
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