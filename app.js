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


Giving Discount to user according their shopping totals 👇

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


Check User Electricity bill acorrding to their units 👇

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