// Increment or Decrement 👇

let i = 11 
b = i++ + ++i 

console.log(i)
console.log(b)

let a = 10 
let b = 22
let c = a + b + a++ + b++ + ++a + ++b

console.log("a=", a)
console.log("b=", b)
console.log("c=", c)

let b = true
b++
console.log(b)

// Math Trick 👇

console.log(Math.round(10.25))
console.log(Math.ceil(10.01))
console.log(Math.floor(10.85))
console.log(Math.trunc(14.85))
console.log(Math.pow(2,5))
console.log(Math.sqrt(25))
console.log(Math.cbrt(216))
console.log(Math.max(478,66,85))
console.log(Math.min(478,66,85))
let a = 89.54785
console.log(Number(a.toFixed(2)))

console.log(Math.floor(Math.random() * 900000 + 1000 ))

// Square root of Perimeter of Triangle 👇

let a = 5
let b = 10
let c = 3

let s = (a + b + c) / 2
a = s - a
b = s - b
c = s - c

let A = (a * b * c ) * s

let abs = Math.abs(A)

console.log(Number((Math.sqrt(abs)).toFixed(2)))

// Circle of circumfrances 👇

let r = 7

let w =  2 * (22 / 7) * r

console.log(w)