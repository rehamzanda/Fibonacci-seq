//Fibonacci Sequence
//1 1 2 3 5 8 13 21 34 ...
//1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13
//n = 43 -> x
//n = 101 -> x
//n = 227 -> x
//n = 491 -> x
//n = 881 -> x


//declare a Fibonacci function that take number as a parameter
// define 3 var, as each term is cosist of the sum of the previus two numbers 
// start current var =1, as Fibonacci start with 1,  011235..
//for loop to loop starting from index=2 to n
// give current value = sum value
// give previous value = current of next loop
// return the result
//call the fun

function Fibonacci(n){
let current=1;
let pre= 0;
let sum= 0;
for (let i = 2; i <= n; i++){
sum = current + pre;
pre= current
current = sum;

}
return sum;

}

let n= 7;
console.log(Fibonaci(n));