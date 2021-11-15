// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// const arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// const arr = ['js', 'css', 'jq'];
// const first = arr.shift();
// console.log(first);

// const arr = ['js', 'css', 'jq'];
// const last = arr.pop()
// console.log(last);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.slice(0, 3);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.slice(3);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.splice(1, 3);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(-1, 0,'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

// const arr = [3, 4, 1, 2, 7];
// console.log(arr.sort());

// const arr = [5, 6, 7, 8, 9];
// let sum = 0;
// arr.forEach(function(num){
//     sum += num
// });
// console.log(sum);

// const arr = [5, 6, 7, 8, 9];
// let arr2 = [];
// arr.forEach(function(num){
//     arr2.push(Math.pow(num, 2))
// });
// console.log(arr2);

const arr = [1,-3, 5, 6,-7, 8, 9,-11];
let arr2 = arr.filter(function(num) {
    if (num >= 0) {
        return true;
    } 
});
console.log(arr2);

// const arr = [1,-3, 5, 6,-7, 8, 9,-11];
// let arr2 = arr.filter(function(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
// });
// console.log(arr2);

// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let arr2 = arr.filter(function(num) {
//     if (num.length > 5) {
//         return true;
//     }
// });
// console.log(arr2);

// const arr = [1, 2, [3, 4], 5, [6, 7]];
// let arr2 = arr.filter(function(num) {
//     if (Array.isArray(num)) {
//         return true;
//     } 
// });
// console.log(arr2);

// const arr = [5,-3, 6,-5, 0,-7, 8, 9];
// let arr2 = arr.filter(function(num) {
//     if (num < 0) {
//         return true;
//     }
// });
// console.log(arr2.length);