// Exercise 1
export const productInfo = (product, price) => {
    console.log(`Sản phẩm: ${product}, Giá: ${price.toLocaleString('vi-VN')} VNĐ`)
}


// Exercise 2
export const greet = (name) => {
    console.log(`Hello ${name}`)
}

// Exercise 3
export const sumUpTo = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

// Exercise 4
export const square = (n) => {
    return n * n
}


// Exercise 5
export const isEven = (n) => {
    return n % 2 === 0 ? true : false
}

// Exercise 6
export const firstElement = (arr) => {
    return arr[0]
}

// Excercise 7
export const sum = (...numbers) => {
    const sum = numbers.reduce((sum, currentNumber) => {
        sum + currentNumber
    }, 0)
    return sum
}

// Exercise 8
export const getValuesFromObject = (user) => {
    // Convert they key to capitalized word
    const capitalize = (key) => {
        return key.charAt(0).toUpperCase() + key.slice(1)
    }
    return Object.entries(user).map(([key, value]) => `${capitalize(key)}: ${value}`).join(", ")
}


// Exercise 9: Print names from array of objects
export const getNames = (people) => {
    return people.map(obj => obj.name).join(", ")
}

// Exercise 10: Get string length
export const stringLength = (str) => {
    return str.length
}

// Exercise 11: Convert string to uppercase
export const toUpperCase = (str) => {
    return str.toUpperCase()
}

// Exercise 12: Format currency
export const formatCurrency = (amount) => {
    let newAmountStr = ""
    let count = 0
    let amountStr = amount.toString()
    for (let i = amountStr.length - 1; i >= 0; i--) {
        let char = ""
        if (count === 3) {
            char = amountStr[i] + ","
            count = 0
        } else {
            char = amountStr[i]
        }
        count++
        newAmountStr = char + newAmountStr
    }
    return newAmountStr + " VNĐ"
}

// Exercise 13: Find maximum value in array
export const max = (numbers) => {
    let max = numbers[0]
    numbers.forEach(number => {
        if (number > max) max = number
    })
    return max
}
// Exercise 14: Check if number is prime
export const isPrime = (n) => {
    // Referencing ideas from ChatGPT
    // Check if the number is less than 2 => flase
    if (n < 2) return false
    // Check if the number is 2 => True
    if (n === 2) return true
    // Check if the number is even => False
    if (n % 2 === 0) return false
    // Loop from 3 up to the square root of n, increment by 2
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        // If n is divisible by any of the numbers in the loop => False
        if (n % i === 0) return false
    }

    // If no divisors were found => True
    return true
}

// Exercise 15: Repeat string n times
export const repeatString = (str, n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(str)
    }
    return arr.join(" ")
}

// Exercise 16: Sum of odd numbers in array
export const sumOdd = (numbers) => {
    let sum = 0
    numbers.forEach(number => {
        if (number % 2 !== 0) sum += number
    })
    return sum
}

// Exercise 17: Sum numbers greater than n
export const sumGreaterThan = (numbers, n) => {
    let sum = 0
    numbers.forEach(number => {
        if (number > n) sum += number
    })
    return sum
}

// Exercise 18: Format date
export const formatDate = (dateStr) => {
    const arr = dateStr.split("-")
    const year = arr[0]
    // Check if year is a proper year
    if (year.length !== 4) return "Invalid year"
    const month = arr[1]
    // Check if month is a proper month
    if (month < 1 || month > 12) return "Invalid month"
    const day = arr[2]
    // Check if day is a proper day
    if (day < 1 || day > 31) return "Invalid day"
    return `${day}/${month}/${year}`
}

// Exercise 19: Get first three elements
export const firstThree = (arr) => {
    return arr.slice(0, 3)
}

// Exercise 20: Check if string contains character
export const containsChar = (str, char) => {
    return str.includes(char)
}

// Exercise 21: Merge arrays
export const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

// Exercise 22: Count occurrences
export const countOccurrences = (arr, element) => {
    return arr.filter(item => item === element).length
}

// Exercise 23: Filter odd numbers
export const filterOdd = (numbers) => {
    return numbers.filter(number => number % 2 !== 0)
}

// Exercise 24: Find numbers greater than value
export const greaterThan = (numbers, value) => {
    return numbers.filter(number => number > value)
}

// Exercise 25: Calculate factorial
export const factorial = (n) => {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

// Exercise 26: Separate even and odd numbers
export const separateEvenOdd = (numbers) => {
    const separatedGroups = {
        even: [],
        odd: []
    }
    numbers.forEach(number => {
        number % 2 === 0
            ? separatedGroups.even.push(number)
            : separatedGroups.odd.push(number)
    })
    return separatedGroups
}

// Exercise 27: Sort array ascending
export const sortAsc = (numbers) => {
    // Selection sorrt
    for (let i = 0; i < numbers.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j
            }
        }
        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]]
    }
    return numbers
}

// Exercise 28: Sum numbers at even indices
export const sumEvenIndex = (numbers) => {
    let sum = 0
    for (let i = 0; i < numbers.length; i += 2) {
        sum += numbers[i]
    }
    return sum
    // Method 2: using reduce
    // return numbers.reduce((sum, number, index) => { 
    //     return index % 2 === 0 ? sum + number : sum
    // }, 0)
}

// Exercise 29: Multiply array by two
export const multiplyByTwo = (numbers) => {
    return numbers.map(number => number * 2)
}

// Exercise 30: Convert array to string
export const arrayToString = (arr) => {
    return arr.join("")
}