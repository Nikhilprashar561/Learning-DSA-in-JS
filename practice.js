const data = [
    {
        name:"Nikhil",
        className:"BSC",
        roll_no:253805,
        profession:"Developer"
    },
    {
        name:"Raja",
        className:"BCA",
        roll_no:253806,
        profession:"Police"
    },
    {
        name:"Yuvraj",
        className:"BA",
        roll_no:253837,
        profession:"MBA"
    }
]

data.forEach((items, index)=> {
    let obj = Object.values(items)
    console.log(`yeh hai items ${obj} aur yeh hai index ${index}`)
}) 