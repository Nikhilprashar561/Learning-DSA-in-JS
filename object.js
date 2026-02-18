// Here We Practice Non - Premetive data type object 👇

// Use Structure Code to make Deep copy and shallow copy of object that's it no need to parse it first string and then copy and then re convert into object.

const hero = {
    name: "Nikhil",
    class: "Bsc",
    roll_no: 253805,
    department:{
        sem: "First"
    }
}

const Copy = structuredClone(hero)
console.log("Strutucre colne", hero)
Copy.name = "code"
console.log(Copy)

console.log("First One", hero)
const no_hero = {...hero}
console.log("Copy",no_hero)
no_hero.name = "Chor"
no_hero.department.sem = "Second"
console.log("Change Copy",no_hero)
console.log("Check First",hero)

const arr = Array.from("Dust")
console.log(arr)
console.log(arr.length)
arr.length = 3
console.log(arr)
arr.length = 5
console.log(arr)

const secri = {
    name:"Dalla"
}

Object.defineProperty(secri, "roll_no", {
    value: "253805",
    writable: false,
    enumerable: true,
    configurable: false
})

console.log(secri)
const test = Object.getOwnPropertyDescriptor(secri, "roll_no")
console.log(check)

const call  = function (val) {
    return val
}

function im(){
    const name = 'Nikhil'
    let num = 2005
    function pass (){
        console.log(name)
    }
    return pass
}
const check = im()
check()
