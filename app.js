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


// Giving Discount to user according their shopping totals 👇

let amt = Number(prompt("Enter Total Amount"));
let dis = 0;

if (amt > 0 && amt <= 5000) {
  dis = 0;
} else if (amt > 5000 && amt <= 7000) {
  dis = 5;
} else if (amt > 7000 && amt <= 9000) {
  dis = 10;
} else if (amt > 9000) {
  dis = 20;
} else {
  console.log(`Abe Chal Nah Chuitye`);
}
console.log(amt - Math.floor((dis * amt) / 100));
console.log(A);


// Check User Electricity bill acorrding to their units 👇

let unit = Number(prompt("Enter Your Electricity Unints"))
let amount = 0;

if (unit > 400){
   amount = (unit - 400) * 13
   unit = 400
} if (unit > 200 && unit <= 400){
    amount += (unit - 200) * 8
    unit = 200
} if (unit > 100 && unit <= 200){
    amount += (unit - 100) * 6
    unit = 100
}

amount += unit * 4

console.log(amount)


// User have give a hard code amount and we will find how many notes are comes in that amount 👇

let amount = 4883

let f = 0
let t = 0
let o = 0
let p = 0
let b = 0
let d = 0
let one = 0

if(amount >= 500){
   f = Math.floor(amount / 500)
    amount = amount % 500
} if(amount >= 200){
   t = Math.floor(amount / 200)
    amount = amount % 200
} if(amount >= 100){
   o = Math.floor(amount / 100)
    amount = amount % 100
} if(amount >= 50){
   p = Math.floor(amount / 50)
    amount = amount % 50
} if(amount >= 20){
   b = Math.floor(amount / 20)
    amount = amount % 20
} if(amount >= 10){
   d = Math.floor(amount / 10)
    amount = amount % 10
} if(amount > 0 && amount < 10){
    one = Math.floor(amount / 1)
    amount = amount % 1
}

console.log("Yeh h 500 ke notes : ", f)
console.log("Yeh h 200 ke notes : ", t)
console.log("Yeh h 100 ke notes : ", o)
console.log("Yeh h 50 ke notes : ", p)
console.log("Yeh h 20 ke notes : ", b)
console.log("Yeh h 10 ke notes : ", d)
console.log("Yeh h 1 ke coins : ", one)
console.log("Yeh Rahi Baki Ki Amount",amount)

// Check Number is Prime or not 👇

let n = 17
let prime = true

for(let i = 2; i <= Math.floor(n/2); i++){
    if(n%i === 0){
        prime = false
    }
}
console.log(prime)

// Sum of digit in while loop 👇

let sum = 0
let n = 123456

while(n > 0){
    let rem = n % 10
    sum = sum + rem
    n = Math.floor(n/10)
    // console.log(n)
    console.log(sum)
}

// Reverse a number using while loop 👇

let n = 1234
let rev = 0;

while(n > 0){
   let rem = n % 10
    rev = rev * 10 + rem
    n = Math.floor(n / 10) 
}
console.log(rev)

// Finding Strong number using while loop 👇

let n = 40585
let sum = 0
let copy = n

while(n > 0){
    let rem = n % 10
    let fact = 1
    for(let i = 1;i<=rem; i++){
        fact = fact * i
    }
    sum = sum + fact
    n = Math.floor(n/10)
} if(copy === sum){
    console.log("Strong hai bhai tu",sum)
} else {
    console.log("Gym Jaya Kr tu BC",sum)
}

// Pattern Print Concept 👇

let prompt = require("prompt-sync")()

let d = Number(prompt("Enter a number :- "))

for(let i = 1; i <= 5; i++){
    for(let j = 1; j<=5;j++){
        process.stdout.write("* ")
    }
    console.log()
}

let v = 0

for(let i = 1;i<= 10; i++){
    let ascii = 65
    for(let j = 1; j<=i;j++){
        // let k = v + j
        process.stdout.write(`${String.fromCharCode(ascii)} `)
        ascii++
    }
    console.log()
}


for(let i = 8; i >= 1 ; i-- ){
    for(let j = 1; j<= i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

for(let i=1;i<=5;i++){

    for(let j=1;j<=5-i;j++){
        process.stdout.write("  ")
    }

    for(let j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    console.log()
}

for(let i = 1; i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i == j || i+j == 5 + 1){
            process.stdout.write("* ")
        } else process.stdout.write("  ")
    }
    console.log()
}

for(let i = 1; i<=5;i++){
    for(let j=1;j<=2 * 5 - 1;j++){
        if(i == j || i+j == 2 * 5){
            process.stdout.write("* ")
        } else process.stdout.write("  ")
    }
    console.log()
}