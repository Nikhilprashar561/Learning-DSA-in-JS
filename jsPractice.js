// More in-depth about js


let cart = [
  { name: "Biryani", price: 300, qty: 1, addons: ["Raita:30", "naan:40"] },
  { name: "Noodles", price: 150, qty: 0, addons: ["naan:20"] },
  { name: "Noodles", price: 200, qty: 3, addons: ["chole:60"] },
];

let temp = cart.map((e) => {
    let addon = 0
    if(Array.isArray(e.addons)){
        e.addons.reduce((sum, price) => {
            console.log(price)
        },0)
    }
})

// console.log(temp)