//Q1 find list of numbers divisible by 3

const arr = [3,5,1,2,9,12]
//write your code here

let number = arr.filter((arr) =>(arr%3==0));
console.log(number);


//expected output---> [3,9,12]
// hint: %3 === 0
// filter
//syntax:
// arr.filter((item,id)=>{
//     //
// })