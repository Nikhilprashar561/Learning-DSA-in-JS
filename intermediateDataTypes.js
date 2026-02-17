// Some Data Types questions 

function maskAadhaar(aadhaarNumber) {
  
  if (/\s/.test(aadhaarNumber)) return "INVALID";
  if (/\D/.test(aadhaarNumber)) return "INVALID";
  if (
    typeof aadhaarNumber !== "string" ||
    aadhaarNumber.length !== 12
  )
    return "INVALID";

  let data = aadhaarNumber.slice(-4);
  let temp = data.padStart(aadhaarNumber.length, "X");
  let store = temp.slice(0, 4);
  return `${store}-${store}-${data}`;
}


function formatChaiMenu(items) {
  if (!Array.isArray(items) || items.length === 0) return "";

  let filterItems = items.filter((e) => {
    return (
      e.name.length !== 0 &&
      typeof e.name === "string" &&
      e.price !== 0 &&
      e.price > 0
    );
  });

  const data = filterItems.map((e) => {
    return `${e.name.toUpperCase()} - Rs.${e.price}`;
  });

  return data.join(" | ");
}

function fixBollywoodTitle(title) {

  if(typeof title !== "string") return ""
  if(title.length === 0) return ""

  let val = title.trim().replace(/\s+/g, " ");
  val = val.toLowerCase()

const exceptions = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];

let temp = val.split(" ")


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
}