// Các bài tập phía dưới, cần sử dụng module để thực hiện tạo hàm.
// (Có thể sử dụng thêm TypeScript)
// This exercise uses AI to create empty export functions and callbacks, while the export function contents are coded manually

// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.
// Input: arr = [1, 2, 3, 4]
// Output: 10
export const sumArray = (arr) => arr.reduce((sum, value) => sum + value, 0)

// Bài 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr
// Input: arr = [1, 2, 2, 3, 2], value = 2
// Output: 3
export const countOccurrences = (arr, value) => {
    return arr.reduce((count, current) => current === value ? count + 1 : count, 0)
}

// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.
// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
export const removeDuplicates = (arr) => {
    const result = []
    arr.forEach(item => {
        if (!result.includes(item)) {
            result.push(item)
        }
    })
    return result
}

// Bài 4. Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)
// Input: arr = [[1, 2], [3, 4]]
// Output: [1, 2, 3, 4]
export const flattenArray = (arr) => {
    // loop through the array
    // if the element is an array, loop through the array
    // if the element is not an array, add it to the result
    // return the result
    const result = []
    arr.forEach(item => {
        item.forEach(element => {
            result.push(element)
        })
    })
    return result
}

// Bài 5. Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không.
// Input: arr = [1, 2, 3, 2, 1]
// Output: true
export const isSymmetric = (arr) => {
    // loop through the array
    // if the element is not equal to the element at the same index from the end, return false
    // return true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false
        }
    }
    return true
}

// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.
// Input: arr = [3, 1, 4, 2, 4]
// Output: 3
export const findSecondLargest = (arr) => {
    // sort the array
    // return the second largest element
    arr.sort((a, b) => a - b)
    return arr[arr.length - 2]
}

// Bài 7. Viết hàm sortProductsByPrice(products) sắp xếp danh sách sản phẩm theo giá tăng dần.
// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// [
//     { name: 'Product B', price: 20 },
//     { name: 'Product A', price: 30 },
//     { name: 'Product C', price: 50 }
// ]
export const sortProductsByPrice = (products) => {
    // Reference to idea from ChatGPT
    const sortedProducts = products.sort((a, b) => a.price - b.price)
    return sortedProducts
}

// Bài 8. Viết hàm findMostExpensiveProduct(products) trả về sản phẩm có giá lớn nhất.
// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// { name: 'Product C', price: 50 }
export const findMostExpensiveProduct = (products) => {
    let mostExpensiveProduct = products[0]
    for (const product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product
        }
    }
    return mostExpensiveProduct
}

// Bài 9. Viết hàm groupByType(arr) gom nhóm các phần tử trong mảng dựa theo loại (type).
// Input:
// arr = [
//     { type: 'fruit', name: 'apple' },
//     { type: 'vegetable', name: 'carrot' },
//     { type: 'fruit', name: 'banana' }
// ];
// Output:
// {
//     fruit: ['apple', 'banana'],
//     vegetable: ['carrot']
// }
export const groupByType = (arr) => {
    let groups = {}
    return arr.reduce((groups, current) => {
        if (!groups[current.type]) groups[current.type] = []
        groups[current.type].push(current.name)
        return groups
    }, {})
}

// Bài 10. Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
// Input: arr1 = [1, 2, 3, 4], arr2 = [2, 4]
// Output: true
export const isSubset = (arr1, arr2) => {
    // Convert to Set to reduce size
    const set1 = new Set(arr1)
    return arr2.every(item => set1.has(item))
}

// Bài 11. Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.
// Input: obj = { a: 10, b: 20, c: 15 }
// Output: 'b'
export const findMaxKey = (obj) => {
    let maxVal = 0
    let maxKey = ""
    for (const key in obj) {
        if (obj[key] > maxVal) {
            maxVal = obj[key]
            maxKey = key
        }

    }
    return maxKey
}

// Bài 12. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.
// Input:
// obj1 = { a: 10, b: 20 };
// obj2 = { b: 30, c: 40 };
// Output: { a: 10, b: 50, c: 40 }
export const mergeObjectsSumValues = (obj1, obj2) => {
    // TODO: Implement mergeObjectsSumValues
}

// Bài 13. Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
// Input: arr = ['a', 'b', 'a', 'c', 'b', 'a']
// Output: { a: 3, b: 2, c: 1 }
export const countElements = (arr) => {
    // TODO: Implement countElements
}

// Bài 14. Viết hàm cleanObject(obj) xóa các key có giá trị là null hoặc undefined.
// Input: obj = { a: 1, b: null, c: undefined, d: 4 }
// Output: { a: 1, d: 4 }
export const cleanObject = (obj) => {
    // TODO: Implement cleanObject
}

// Bài 15. Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.
// Input: arr = [1, 2, 3, 4, 2]
// Output: true
export const hasDuplicate = (arr) => {
    // TODO: Implement hasDuplicate
}

// Bài 16. Viết hàm sumByGroup(arr, key) tính tổng giá trị theo nhóm.
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// Output:
// {
//     fruit: 40,
//     vegetable: 20
// }
export const sumByGroup = (arr, key) => {
    // TODO: Implement sumByGroup
}

// Bài 17. Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [3, 4, 5]
// Output: [1, 2, 3, 4, 5]
export const uniqueValues = (arr1, arr2) => {
    // TODO: Implement uniqueValues
}

// Bài 18. Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
// Input: arr1 = [1, 2, 3], arr2 = [3, 2, 1]
// Output: true
export const isPermutation = (arr1, arr2) => {
    // TODO: Implement isPermutation
}

// Bài 19. Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.
// Input: arr = ['abc', 'abcd', 'a']
// Output: 'abcd'
export const findLongestString = (arr) => {
    // TODO: Implement findLongestString
}

// Bài 20. Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]
// Output: [2, 3]
export const intersection = (arr1, arr2) => {
    // TODO: Implement intersection
}

// Bài 21. Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.
// Input: arr = [5, 10, 15, 20], minValue = 12
// Output: [15, 20]
export const filterByMinValue = (arr, minValue) => {
    // TODO: Implement filterByMinValue
}

// Bài 22.  Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.
// Input: obj = { a: 'cat', b: 'elephant', c: 'dog' }
// Output: 'elephant'
export const findLongestValue = (obj) => {
    // TODO: Implement findLongestValue
}

// Bài 23. Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.
// Input: arr = ['apple', 'banana', 'avocado', 'blueberry']
// Output:
// {
//     a: ['apple', 'avocado'],
//     b: ['banana', 'blueberry']
// }
export const groupByFirstLetter = (arr) => {
    // TODO: Implement groupByFirstLetter
}

// Bài 24. Viết hàm getAdults(people) để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.
// Input:
// people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 16 },
//     { name: 'David', age: 22 }
// ];
// Output:
// [{ name: 'Bob', age: 20 }, { name: 'David', age: 22 }]
export const getAdults = (people) => {
    // TODO: Implement getAdults
}

// Bài 25. Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].
// Input: obj = { a: 1, b: 2, c: 3 }
// Output: [['a', 1], ['b', 2], ['c', 3]]
export const convertToArray = (obj) => {
    // TODO: Implement convertToArray
}

// Bài 26. Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.
// Input: arr = ['a', 'ccc', 'bb']
// Output: ['a', 'bb', 'ccc']
export const sortStringsByLength = (arr) => {
    // TODO: Implement sortStringsByLength
}

// Bài 27. Viết hàm sumByKey(arr, key) để tính tổng giá trị là số của một key được chỉ định trong danh sách object.
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// key = 'price';
// Output: 60
export const sumByKey = (arr, key) => {
    // TODO: Implement sumByKey
}

// Bài 28. Viết hàm countWords(str) để đếm số từ trong một chuỗi.
// Input: str = "Hello world! Welcome to JavaScript"
// Output: 5
export const countWords = (str) => {
    // TODO: Implement countWords
}

// Bài 29. Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.
// Input: obj = { a: 100, b: 20, c: 50 }
// Output: 'b'
export const findMinKey = (obj) => {
    // TODO: Implement findMinKey
}
