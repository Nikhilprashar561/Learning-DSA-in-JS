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

// Calculate array number total value and store in new variable 👇

let arr = [10,20,30,40,50,60,70,80,90,100]

let sum = 0

for(let i=0;i<arr.length;i++){
    sum += arr[i]
}

console.log(sum)

// Find Maximum number in array 👇

let arr = [52,4,6,5,2]
let max = arr[0]
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
console.log(max)

// Find Second Maximun number 👇

let arr = [10, 30, 56, 43, 29, 64, 49, 60]  
let max = Math.max(arr[0], arr[1]) // 64
let min = Math.min(arr[0],arr[1]) // 60

console.log(max, min)

for(let i=2;i<arr.length;i++){
    if(arr[i]>max){
        min = max
        max = arr[i]
    } else if(arr[i]>min && max != arr[i]){
        min = arr[i]
    }
}
console.log(max, min)

// Reverse a number with taking extra space 👇

let are = [10,20,30,40,50]
let temp = new Array(are.length)
let j = 0

for(let i=are.length-1;i>=0;i--){
    temp[j] = are[i]
    j++;
}
console.log(temp)

// Revrse a number without taking extra space 👇

let aye = [10,20,30,40,50]
let i=0, j=aye.length-1

while(i!=j){
    let temp = aye[i]
    aye[i] = aye[j]
    aye[j] = temp
    i++
    j--
}
console.log(aye)

// Position a binary number in a manner way 👇
 
let oye = [1,1,0,1,0,1,0,0,1]

let i = 0, j = 0

while(i<oye.length){
    if(oye[i]==0){
        let temp = oye[i]
        oye[i] = oye[j]
        oye[j] = temp
        j++
    }
    i++
}
console.log(oye)

// Move first Array Element Last 👇

let arr = [1, 2, 3, 4, 5]

let cpy = arr[0]

for(let i=0;i<=arr.length-1;i++){
    arr[i] = arr[i+1]
}
arr[arr.length-1] = cpy
console.log(arr)

// Move last Array Element in first index 👇

let arr = [1, 2, 3, 4, 5]
                                
let cpy = arr[arr.length-1]

for(let i = arr.length-1;i>=0;i--){
    arr[i] = arr[i-1]
}

arr[0] = cpy

console.log(arr)

// Move Last Array Element left side by two index 👇

Before : - [1, 2, 3, 4, 5]
After :- [3, 4, 5, 1, 2]

let arr = [1, 2, 3, 4, 5]
let k = 3
k = k % arr.length
let count = 0
for(let j=0;j<k;j++){
    count++
    let copy = arr[0]
    for(let i=0;i<arr.length-1;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = copy
}
console.log(arr)
console.log(count)

// Move Last Array Element left side by two index with extra space 👇

let arr = [1,2,3,4,5]
let temp = new Array(arr.length)
let k = 2
k = k % arr.length

for(let i = 0; i < arr.length; i++){
    temp[i] = arr[(i+k)%arr.length]
}
console.log(temp)

// Move Last Array Element left side by two index without extra space 👇

let arr = [1,2,3,4,5]

let k = 2
k = k % arr.length

reverse(0, k-1)
reverse(k, arr.length-1)
reverse(0, arr.length-1)
function reverse(i, j){
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
console.log(arr)

// Move last 2 index array element in first postion 👇 Like [1,2,3,4,5] :- [4,5,1,2,3]

// My Aproach is [1,2,3,4,5] :- First Reverse them :- [5,4,3,2,1] then reverse first two index :- [4,5,3,2,1] :- 
//  then reverse last 3 array element :- [4,5,1,2,3]

let arr = [1,2,3,4,5]
let k = 2
k = k % arr.length
leftReverse(i=0,j=arr.length-1)
leftReverse(i=0, k - 1 )
leftReverse(k,j = arr.length-1)
function leftReverse(i,j){
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
console.log(arr)

// Remove the duplicate items form the sorted array elements 👇

// We have an array [0,0,1,1,2,2,3,3,4,4,5] :- convert into :- [0,1,2,3,4,5] :- Remove duplicates items from array.

let arr = [0,0,1,1,2,2,3,3,4,4,5]

let j = 1
let i = 0
removeDuplicates(i, j)
function removeDuplicates(i,j){
    for( i; i <= arr.length-1; i++){
    if(arr[i] == arr[j]){
        i++
    }
    if(arr[i] != arr[j]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[j] = temp
        j++
        i++
    }
}
}
console.log(arr)

// Merge Sort array question we have a two different arrays merge them and sort. 👇

// ex:- arr1 = [2,4,6,8] and arr2 = [1,3,5,7] and answer is [1,2,3,4,5,6,7,8] :- My Approach

let arr1 = [2,4,6,8,10]
let arr2 = [1,3,5,7,9,11]
let temp = new Array(arr1.length-1 + arr2.length)

let i = 0
let j = 0

while(i<arr1.length && j<arr2.length)
for(let k=0;k<=temp.length;k++){
    if(arr2[j] < arr1[i]){
        temp[k] = arr2[j]
        j++
    } else if(arr1[i] < arr2[j]){
        temp[k] = arr1[i]
        i++
    }
}
console.log(temp)

// Merge Sort array question we have a two different arrays merge them and sort. 👇
// ex:- arr1 = [2,4,6,8] and arr2 = [1,3,5,7] and answer is [1,2,3,4,5,6,7,8]

let arr1 = [2,4,6,8,10,12,13,14,15]
let arr2 = [1,3,5,7,9,11]
let temp = new Array(arr1.length + arr2.length)

let i=j=k=0
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        temp[k++] = arr1[i++]
    } else {
        temp[k++] = arr2[j++]
    }
}
while(j<arr2.length){
    temp[k++] = arr2[j++]
}
while(i<arr1.length){
    temp[k++] = arr1[i++]
}
console.log(temp)

// Sort color by number 👇
// Example 3 :- [1, 1,, 0, 1, 2, 0, 1, 0, 2, 1, 1] and output is :- [0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2] ..
                                 
let arr = [1, 1, 0, 1, 2, 0, 1, 0, 2, 1, 1]                 
let i = 0
let j = 0
let k = arr.length-1

while(i<=k){
  if(arr[i]<arr[j]){
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
    j++
    i++
  } else if(arr[k]<arr[i]){
    let temp = arr[k]
    arr[k] = arr[i]
    arr[i] = temp
    k--
  } else{
    i++
  }
}
console.log(arr)

// Sort color by number Second Approach 👇
// Example 2 :- [2, 0, 2, 1, 1, 0] and output is :- [0, 0, 1, 1, 2, 2] ..
                                 
let arr = [2, 0, 2, 1, 1, 0]                 
let i = 0
let j = 0
let k = arr.length-1

while(i<=k){
  if(arr[i]<arr[j]){
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
    j++
    i++
  } else if(arr[k]<arr[i]){
    let temp = arr[k]
    arr[k] = arr[i]
    arr[i] = temp
    k--
  } else{
    i++
  }
}
console.log(arr)

// Find Maximum Profit in stock 👇

let prices = [9, 7, 13, 17, 15];

let maxProfit = 0; // 10
let min = prices[0]; // 7
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) min = prices[i];
  let profit = prices[i] - min; // 0
  maxProfit = Math.max(maxProfit, profit); 
}
console.log(maxProfit);

// Find SubArray:- [-2, 1, -3, 4, -1, 2, 1, -5, 4] 👇

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let max = -Infinity
let sum =0 
for(let i=0;i<arr.length;i++){
  sum += arr[i]
  max = Math.max(max, sum)
  if(sum<0) sum = 0
}
Console.log(max)

// Check String is Pallindrome or not 👇

let value = "madam"
let j=value.length-1
let i = 0
let msg = true

while(i<j){
    if(value[i] != value[j]){
        msg = false
    }
    i++
    j--
}
if(msg) console.log("String is Pallindrome")
else console.log("String is not Pallindrome")

// Convert a UpperCase String into lowercase and then LowerCase into UpperCase 👇

let s = "NiKHil KoMaL"
console.log(s)

let toggle = ""
for(let i =0;i<s.length;i++){
    let ch = s.charCodeAt(i)
    if(ch>=65 && ch <= 90){
        toggle = toggle + String.fromCharCode(ch+32)
    } else if(ch>=97 && ch <=122){
        toggle = toggle + String.fromCharCode(ch-32)
    }
}
console.log(toggle)

// Figure out how much one alphaet's are repeat 👇

let s = "hello";
let arr = new Array(128).fill(0);
// console.log(arr)

for (let i = 0; i < s.length; i++) {
  let index = s.charCodeAt(i);
  arr[index] = arr[index] + 1;
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    // console.log(arr[i])
    console.log(String.fromCharCode(i) + " Appeats at " + arr[i] + " times");
  }
}

// Majority Elements 👇 :- [2, 2, 1, 1, 1, 2, 2] and output is :- 2

let arr = [2, 2, 1, 1, 2, 2, 2];

let ans = arr[0];
let count = 1;
for (let i = 1; i <= arr.length; i++) {
  if (count == 0) {
    ans = arr[i];
    count = 1;
  } else if (ans == arr[i]) count++;
  else count--;
}
console.log(ans);

// Identify How much water are fill during rain 👇

let arr = [4,2,0,3,2,5]
let left = new Array(arr.length)
let right = new Array(arr.length)
let maxLeft = arr[0], maxRight = arr[arr.length-1]
left[0] = maxLeft, right[right.length-1] = maxRight
// [4,4,4,4,4,4]
// [5,5,5,5,5,5]
for(let i =1;i<arr.length;i++){
    maxLeft = Math.max(arr[i],maxLeft)
    left[i] = maxLeft
}
for(let i =arr.length-2;i>=0;i--){
    maxRight = Math.max(arr[i],maxRight)
    right[i] = maxRight
}
let ans = 0 
for(let i = 0; i< arr.length;i++){
    ans += Math.min(left[i], right[i]) - arr[i] // 0 + 2 + 4 + 1 + 2
}
console.log(ans)