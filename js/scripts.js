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

// TASK 14 Var.1
// const arr = [5, 6, 7, 8, 9];
// let sum = 0;
// arr.forEach(function(num){
//     sum += num
// });
// console.log(sum);

// TASK 14 Var.2
// const arr = [5, 6, 7, 8, 9];
// const total = arr.reduce(function(sum, current) {
//     return sum + current
// });
// console.log(total);

// TASK 15 Var.1
// const arr = [5, 6, 7, 8, 9];
// let arr2 = [];
// arr.forEach(function(num){
//     arr2.push(Math.pow(num, 2))
// });
// console.log(arr2);

// TASK 15 Var.2
// const arr = [5, 6, 7, 8, 9];
// const degreeArr = arr.map(function(num){
//     return Math.pow(num, 2)
// });
// console.log(degreeArr);

// TASK 16 var.1
// const arr = [1,-3, 5, 6,-7, 8, 9,-11];
// let arr2 = arr.filter(function(num) {
//     if (num < 0) {
//         return true;
//     } 
// });
// console.log(arr2);

// TASK 16 var.2
// const arr = [1,-3, 5, 6,-7, 8, 9,-11];
// const arr2 = arr.filter(function(num){
//     return (num < 0)
// });
// console.log(arr2);

// TASK 17 var.1
// const arr = [1,-3, 5, 6,-7, 8, 9,-11];
// let arr2 = arr.filter(function(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
// });
// console.log(arr2);

// TASK 17 var.2
// const arr = [1,-3, 5, 6,-7, 8, 9,-11];
// const arr2 = arr.filter(function(num){
//     return (num % 2 === 0)
// });
// console.log(arr2);

// TASK 18 var.1
// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let arr2 = arr.filter(function(num) {
//     if (num.length > 5) {
//         return true;
//     }
// });
// console.log(arr2);

// TASK 18 var.2
// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// const arr2 = arr.filter(function(num) {
//     return (num.length > 5)
// });
// console.log(arr2);

// TASK 19 var.1
// const arr = [1, 2, [3, 4], 5, [6, 7]];
// let arr2 = arr.filter(function(num) {
//     if (Array.isArray(num)) {
//         return true;
//     } 
// });
// console.log(arr2);

// TASK 19 var.2
// const arr = [1, 2, [3, 4], 5, [6, 7]];
// const arr2 = arr.filter(function(num) {
//     return (Array.isArray(num))
// }); 
// console.log(arr2);

// TASK 20 var.1
// const arr = [5,-3, 6,-5, 0,-7, 8, 9];
// let arr2 = arr.filter(function(num) {
//     if (num < 0) {
//         return true;
//     }
// });
// console.log(arr2.length);

// TASK 20 var.2
// const arr = [5,-3, 6,-5, 0,-7, 8, 9];
// const arr2 = arr.filter(function(num){
//     return (num < 0)
// });
// console.log(arr2.length);