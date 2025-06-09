// Các bài tập phía dưới, cần sử dụng module để thực hiện tạo hàm.
// (Có thể sử dụng thêm TypeScript)

import {
    sumArray,
    countOccurrences,
    removeDuplicates,
    flattenArray,
    isSymmetric,
    findSecondLargest,
    sortProductsByPrice,
    findMostExpensiveProduct,
    groupByType,
    isSubset,
    findMaxKey,
    mergeObjectsSumValues,
    countElements,
    cleanObject,
    hasDuplicate,
    sumByGroup,
    uniqueValues,
    isPermutation,
    findLongestString,
    intersection,
    filterByMinValue,
    findLongestValue,
    groupByFirstLetter,
    getAdults,
    convertToArray,
    sortStringsByLength,
    sumByKey,
    countWords,
    findMinKey
} from "./utils.js"

// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.
// Input: arr = [1, 2, 3, 4]
// Output: 10
console.log('Exercise 1:', sumArray([1, 2, 3, 4]));

// Bài 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr
// Input: arr = [1, 2, 2, 3, 2], value = 2
// Output: 3
console.log('Exercise 2:', countOccurrences([1, 2, 2, 3, 2], 2));

// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.
// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
console.log('Exercise 3:', removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));

// Bài 4. Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)
// Input: arr = [[1, 2], [3, 4]]
// Output: [1, 2, 3, 4]
console.log('Exercise 4:', flattenArray([[1, 2], [3, 4]]));

// Bài 5. Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không.
// Input: arr = [1, 2, 3, 2, 1]
// Output: true
console.log('Exercise 5:', isSymmetric([1, 2, 3, 2, 1]));

// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.
// Input: arr = [3, 1, 4, 2, 4]
// Output: 3
console.log('Exercise 6:', findSecondLargest([3, 1, 4, 2, 4]));

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
console.log('Exercise 7:', sortProductsByPrice([
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
]));

// Bài 8. Viết hàm findMostExpensiveProduct(products) trả về sản phẩm có giá lớn nhất.
// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// { name: 'Product C', price: 50 }
console.log('Exercise 8:', findMostExpensiveProduct([
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
]));

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
console.log('Exercise 9:', groupByType([
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
]));

// Bài 10. Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
// Input: arr1 = [1, 2, 3, 4], arr2 = [2, 4]
// Output: true
console.log('Exercise 10:', isSubset([1, 2, 3, 4], [2, 4]));

// Bài 11. Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.
// Input: obj = { a: 10, b: 20, c: 15 }
// Output: 'b'
console.log('Exercise 11:', findMaxKey({ a: 10, b: 20, c: 15 }));

// Bài 12. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.
// Input:
// obj1 = { a: 10, b: 20 };
// obj2 = { b: 30, c: 40 };
// Output: { a: 10, b: 50, c: 40 }
console.log('Exercise 12:', mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));

// Bài 13. Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
// Input: arr = ['a', 'b', 'a', 'c', 'b', 'a']
// Output: { a: 3, b: 2, c: 1 }
console.log('Exercise 13:', countElements(['a', 'b', 'a', 'c', 'b', 'a']));

// Bài 14. Viết hàm cleanObject(obj) xóa các key có giá trị là null hoặc undefined.
// Input: obj = { a: 1, b: null, c: undefined, d: 4 }
// Output: { a: 1, d: 4 }
console.log('Exercise 14:', cleanObject({ a: 1, b: null, c: undefined, d: 4 }));

// Bài 15. Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.
// Input: arr = [1, 2, 3, 4, 2]
// Output: true
console.log('Exercise 15:', hasDuplicate([1, 2, 3, 4, 2]));

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
console.log('Exercise 16:', sumByGroup([
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
], 'type'));

// Bài 17. Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [3, 4, 5]
// Output: [1, 2, 3, 4, 5]
console.log('Exercise 17:', uniqueValues([1, 2, 3], [3, 4, 5]));

// Bài 18. Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
// Input: arr1 = [1, 2, 3], arr2 = [3, 2, 1]
// Output: true
console.log('Exercise 18:', isPermutation([1, 2, 3], [3, 2, 1]));

// Bài 19. Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.
// Input: arr = ['abc', 'abcd', 'a']
// Output: 'abcd'
console.log('Exercise 19:', findLongestString(['abc', 'abcd', 'a']));

// Bài 20. Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]
// Output: [2, 3]
console.log('Exercise 20:', intersection([1, 2, 3], [2, 3, 4]));

// Bài 21. Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.
// Input: arr = [5, 10, 15, 20], minValue = 12
// Output: [15, 20]
console.log('Exercise 21:', filterByMinValue([5, 10, 15, 20], 12));

// Bài 22.  Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.
// Input: obj = { a: 'cat', b: 'elephant', c: 'dog' }
// Output: 'elephant'
console.log('Exercise 22:', findLongestValue({ a: 'cat', b: 'elephant', c: 'dog' }));

// Bài 23. Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.
// Input: arr = ['apple', 'banana', 'avocado', 'blueberry']
// Output:
// {
//     a: ['apple', 'avocado'],
//     b: ['banana', 'blueberry']
// }
console.log('Exercise 23:', groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));

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
console.log('Exercise 24:', getAdults([
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
]));

// Bài 25. Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].
// Input: obj = { a: 1, b: 2, c: 3 }
// Output: [['a', 1], ['b', 2], ['c', 3]]
console.log('Exercise 25:', convertToArray({ a: 1, b: 2, c: 3 }));

// Bài 26. Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.
// Input: arr = ['a', 'ccc', 'bb']
// Output: ['a', 'bb', 'ccc']
console.log('Exercise 26:', sortStringsByLength(['a', 'ccc', 'bb']));

// Bài 27. Viết hàm sumByKey(arr, key) để tính tổng giá trị là số của một key được chỉ định trong danh sách object.
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// key = 'price';
// Output: 60
console.log('Exercise 27:', sumByKey([
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
], 'price'));

// Bài 28. Viết hàm countWords(str) để đếm số từ trong một chuỗi.
// Input: str = "Hello world! Welcome to JavaScript"
// Output: 5
console.log('Exercise 28:', countWords("Hello world! Welcome to JavaScript"));

// Bài 29. Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.
// Input: obj = { a: 100, b: 20, c: 50 }
// Output: 'b'
console.log('Exercise 29:', findMinKey({ a: 100, b: 20, c: 50 }));
