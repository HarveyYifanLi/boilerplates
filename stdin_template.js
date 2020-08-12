'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    //simple edge case checking
    if(!arr || arr.length == 0 || arr.length != arr[0].length) return false;
    //declare and initialize return data template and other variables
    let priSum = 0;
    let secSum = 0;
    let result = 0;
    //loop through the outer array
    for(let i=0; i<arr.length; i++){
        //loop through the inner array
        for(let j=0; j<arr[i].length; j++){
            //for primary diagonal: arr[0][0], arr[1][1], arr[2][2] -> arr[i][j] where i == j
            //sum up for primary diagonal as 'priSum'
            if(i == j) priSum += arr[i][j];
            //for secondary diagonal: arr[0][2], arr[1][1], arr[2][0] -> arr[i][j] where i + j == arr.length - 1 
            //sum up for secondary diagonal as 'secSum'
            if(i + j == arr.length - 1) secSum += arr[i][j];
        }
    }
    // calculate the abs diff of two sums and return it
    result = Math.abs(priSum - secSum);
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

