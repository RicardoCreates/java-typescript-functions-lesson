
//Java
// public static int sum(int a, int b){
//     return a+b;
// }

// Normale Typescript function
function sum(a:number, b:number):number{
    return a+b;
}

console.log(sum(5,20))

// Arrow function
const add = (a: number, b: number): number =>  {
    console.log("Yeah!")
    return a + b;
}


console.log(add(5,12))


const numbers:number[] = [1,2,3,4,5]
const doubleNums:number[] = numbers.map(num => num*2)
const evenNums:number[] = numbers.filter(num => num%2 === 0)
console.log(numbers)
console.log(doubleNums)
console.log(evenNums)