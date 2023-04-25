process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    let grid = [];
    for (grid_i = 0; grid_i < 20; grid_i++) {
        grid[grid_i] = readLine().split(' ');
        grid[grid_i] = grid[grid_i].map(Number);
    }

    let maxProduct = 0;

    // Find the maximum product in the horizontal direction
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 17; j++) {
            let product = grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    for (let i = 0; i < 17; i++) {
        for (let j = 0; j < 20; j++) {
            let product = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    for (let i = 0; i < 17; i++) {
        for (let j = 0; j < 17; j++) {
            let product = grid[i][j] * grid[i + 1][j + 1] * grid[i + 2][j + 2] * grid[i + 3][j + 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    for (let i = 0; i < 17; i++) {
        for (let j = 3; j < 20; j++) {
            let product = grid[i][j] * grid[i + 1][j - 1] * grid[i + 2][j - 2] * grid[i + 3][j - 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    console.log(maxProduct);
}