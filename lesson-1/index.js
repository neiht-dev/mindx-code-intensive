import {
    productInfo,
    greet,
    sumUpTo,
    square,
    isEven,
    firstElement,
    sum,
    getValuesFromObject,
    getNames,
    stringLength,
    toUpperCase,
    formatCurrency,
    max,
    isPrime,
    repeatString,
    sumOdd,
    sumGreaterThan,
    formatDate,
    firstThree,
    containsChar,
    mergeArrays,
    countOccurrences,
    filterOdd,
    greaterThan,
    factorial,
    separateEvenOdd,
    sortAsc,
    sumEvenIndex,
    multiplyByTwo,
    arrayToString
} from './utils.js'

let n = 0
let arr = []
// Test Exercise 1
console.log("Exercise 1:")
productInfo("Sách", 20000)

// Test Exercise 2
console.log("\nExercise 2:")
greet("An")

// Test Exercise 3
console.log("\nExercise 3:")
n = 5
console.log(`Sum from 1 to ${n} is: ${sumUpTo(n)}`)

// Test Exercise 4
console.log("\nExercise 4:")
n = 6
console.log(`Square of ${n} is ${square(n)}`)

// Test Exercise 5
console.log("\nExercise 5:")
n = 2
console.log(`The number ${n} is an ${isEven(n) ? "even" : "odd"} number`)

// Test Exercise 6
console.log("\nExercise 6:")
arr = [1, 2, 3]
console.log(`The first element of the array "${arr}" is ${firstElement(arr)}`)

// Test Exercise 7
console.log("\nExercise 7:")
console.log(`The sum of the rest "1,2,3,4" is ${sum(1, 2, 3, 4)}`)


// Test Exercise 8
console.log("\nExercise 8:")
const user = { name: "Nam", age: 30 }
console.log(getValuesFromObject(user))

// Test Exercise 9
console.log("\nExercise 9:")
const people = [{ name: "An" }, { name: "Bình" }]
console.log(getNames(people))

// Test Exercise 10
console.log("\nExercise 10:")
console.log(stringLength("Hello World"))

// Test Exercise 11
console.log("\nExercise 11:")
console.log(toUpperCase("javascript"))

// Test Exercise 12
console.log("\nExercise 12:")
console.log(formatCurrency(1000000))

// Test Exercise 13
console.log("\nExercise 13:")
console.log(max([10, 5, 20, 8]))

// Test Exercise 14
console.log("\nExercise 14:")
console.log(isPrime(7))

// Test Exercise 15
console.log("\nExercise 15:")
console.log(repeatString("Hello", 3))

// Test Exercise 16
console.log("\nExercise 16:")
console.log(sumOdd([1, 2, 3, 4]))

// Test Exercise 17
console.log("\nExercise 17:")
console.log(sumGreaterThan([1, 2, 3, 4], 2))

// Test Exercise 18
console.log("\nExercise 18:")
console.log(formatDate("2024-11-28"))

// Test Exercise 19
console.log("\nExercise 19:")
console.log(firstThree([1, 2, 3, 4, 5]))

// Test Exercise 20
console.log("\nExercise 20:")
console.log(containsChar("javascript", "j"))

// Test Exercise 21
console.log("\nExercise 21:")
console.log(mergeArrays([1, 2], [3, 4]))

// Test Exercise 22
console.log("\nExercise 22:")
console.log(countOccurrences([1, 2, 2, 3, 2], 2))

// Test Exercise 23
console.log("\nExercise 23:")
console.log(filterOdd([1, 2, 3, 4]))

// Test Exercise 24
console.log("\nExercise 24:")
console.log(greaterThan([1, 2, 3, 4], 2))

// Test Exercise 25
console.log("\nExercise 25:")
console.log(factorial(5))

// Test Exercise 26
console.log("\nExercise 26:")
console.log(separateEvenOdd([1, 2, 3, 4]))

// Test Exercise 27
console.log("\nExercise 27:")
console.log(sortAsc([3, 1, 4, 2]))

// Test Exercise 28
console.log("\nExercise 28:")
console.log(sumEvenIndex([1, 2, 3, 4]))

// Test Exercise 29
console.log("\nExercise 29:")
console.log(multiplyByTwo([1, 2, 3]))

// Test Exercise 30
console.log("\nExercise 30:")
console.log(arrayToString(["a", "b", "c"]))