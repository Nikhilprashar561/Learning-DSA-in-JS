// Do Practice here and build a storg logic
let title = "  DILWALE   DULHANIA   LE   JAYENGE  ";

title = title.trim().replace(/\s+/g, " ").toLowerCase();
console.log(title)

if (typeof title !== "string" || title.length === 0) console.log("chor");
const exceptions = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];
let temp = title.split(" ")


let data = temp.map((e,i) => {
 if(i === 0){
    return e.charAt(0).toUpperCase() + e.slice(1)
 }
 if(exceptions.includes(e)){
    return e
 }
 return e.charAt(0).toUpperCase() + e.slice(1)
})

return data.join(" ")

//   const result = words.map((word, index) => {

//     if (exceptions.includes(word)) {
//       // Keep exception words lowercase
//       return word;
//     }
//   });
