const { task } = require('./util')
const taskDescription = {
    name: 'maximalSquare',
    description: "You have a 2D binary matrix that's filled with 0s and 1s. In the matrix, find the largest square that contains only 1s and return its area.\n"
}
/**
 * Task: maximalSquare
 * @description You have a 2D binary matrix that's filled with 0s and 1s.
 * In the matrix, find the largest square that contains only 1s and return its area.
 *
 * @name maximalSquare
 * @param matrix {Array}
 * @return {Number}
 */
const maximalSquare = (matrix) => {
    const rows = matrix.length;
    if(rows === 0) return 0;
    const cols = matrix[0].length;
    let maxSquare = Math.min(rows, cols);
    let maxNum
    while (maxSquare > 0) {
        if (hasSquare(matrix, maxSquare)) {
            maxNum = maxSquare * maxSquare;
            if (maxNum >= 100) return 'over or 100'
            return maxNum;
        }
        maxSquare--;
    }

    /**
     *
     * @param mx {Array}
     * @param maxSq {Number}
     * @return {boolean}
     */
    function hasSquare(mx, maxSq){
        for (let row = 0; row < mx.length; row++) {
            for (let col = 0; col < mx[0].length; col++) {
                if (hasSquareFirstEl(row, col, mx, maxSq)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * @function hasSquareFirstEl
     * @description See first element
     * @param firstRow {Number}
     * @param firstCol {Number}
     * @param mx {Array}
     * @param maxSq {Number}
     * @return {boolean}
     */
    function hasSquareFirstEl(firstRow, firstCol, mx, maxSq){
        let endRow = firstRow + maxSq - 1;
        if (endRow > mx.length-1) {
            return false;
        }

        let endCol = firstCol + maxSq - 1;
        if (endCol > mx[0].length-1) {
            return false;
        }

        for (let rowLine = firstRow; rowLine <= endRow; rowLine++) {
            for (let column = firstCol; column <= endCol; column++) {

                let result = parseInt(mx[rowLine][column], 10);
                if (result === 0) {
                    return false;
                }
            }
        }
        return true;
    }


    return 0;
}

const matrix = [
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
    ['1', '0', '0', '1', '0']
]

task.run(maximalSquare,taskDescription).set(matrix)
