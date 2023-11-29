//link:https://leetcode.com/problems/valid-sudoku/
/**
 * Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

const checkEachRow = (arr) => {
    for (let i = 0; i < 9; i++) {
        let uniqueArr = [];
        for (let j = 0; j < 9; j++) {
            if (arr[i][j] !== '.') {
                if (uniqueArr.includes(arr[i][j])) {

                    return false
                }
                else {
                    uniqueArr.push(arr[i][j])
                }
            }
        }
    }
    return true
}

const checkEachcolum = (arr) => {
    for (let i = 0; i < 9; i++) {
        let uniqueArr = [];
        for (let j = 0; j < 9; j++) {
            if (arr[j][i] !== '.') {
                if (uniqueArr.includes(arr[j][i])) {
                    console.log(uniqueArr, arr[j][i])
                    return false
                }
                else {
                    uniqueArr.push(arr[j][i])
                }
            }
        }
    }
    return true
}
const check3X3 = (arr) => {
    for (let row = 0; row < 9; row  = row + 3) {
        for (let col = 0; col < 9; col = col + 3) {
            let uniqueArr = [];
            for (let col1 = col; col1 < col + 3; col1++) {
                for (let row1 = row; row1 < row + 3; row1++) {
                    console.log(row1 +' '+col1)
                    // if (arr[row1][col1] !== '.') {
                        
                    //     if (uniqueArr.includes(arr[row1][col1])) {
                    //         return false
                    //     }
                    //     else {
                            
                    //         uniqueArr.push(arr[row1][col1])
                    //     }
                    // }
                }
            }

        }
        return true
    }
}
//Input: 
let board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
    // [[".", ".", ".", ".", ".", ".", "5", ".", "."],
    // [".", ".", ".", ".", ".", ".", ".", ".", "."],
    // [".", ".", ".", ".", ".", ".", ".", ".", "."],
    // ["9", "3", ".", ".", "2", ".", "4", ".", "."],
    // [".", ".", "7", ".", ".", ".", "3", ".", "."],
    // [".", ".", ".", ".", ".", ".", ".", ".", "."],
    // [".", ".", ".", "3", "4", ".", ".", ".", "."],
    // [".", ".", ".", ".", ".", "3", ".", ".", "."],
    // [".", ".", ".", ".", ".", "5", "2", ".", "."]]
var isValidSudoku = function (board) {
    return checkEachRow(board) && checkEachcolum(board) && check3X3(board)
};

let cond = isValidSudoku(board)

console.log(cond)