const { task } = require('./util')
const taskDescription = {
    name: 'firstDuplicate',
    description: "Given an array {a} that contains only numbers in the range from {1} to {a.length}, find the first duplicate {number} for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the {number} for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1\n"
}
/**
 * Task: firstDuplicate
 * @description Given an array {a} that contains only numbers in the range from {1} to {a.length},
 * find the first duplicate {number} for which the second occurrence has the minimal index.
 * In other words, if there are more than 1 duplicated numbers, return the {number} for which
 * the second occurrence has a smaller index than the second occurrence of the other number does.
 * If there are no such elements, return -1
 * @param arr {Array}
 * @return {number|any}
 */
const firstDuplicate = (arr) => {
    const numbers = {};

    for (const number of arr) {
        if (numbers[number]) {
            return number;
        } else {
            numbers[number] = true;
        }
    }
    return -1;
}



let a = [2, 1, 3, 5, 3, 2]
let b = [2, 2]
let c = [2, 4, 3, 5, 1]

// exec
task.run(firstDuplicate,taskDescription).set(a,b,c)
