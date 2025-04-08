function processNumbers(arr, type) {
    switch (type) {
        case "positive":
            return arr.filter(num => num > 0);
        case "squaredEvens":
            return arr.filter(num => num % 2 === 0).map(num => num * num);
        default:
            return arr;
    }
}


const numbers = [-4, -1, 0, 2, 3, 4];

console.log(processNumbers(numbers, "positive"));
console.log(processNumbers(numbers, "squaredEvens"));