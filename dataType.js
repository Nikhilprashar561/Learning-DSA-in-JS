export function getChaiOrderLength(order) {
  let len;
  if (typeof order !== "string") {
    return -1;
  }
  if (order) {
    order = order.trim();
    if (order.length === 0) {
      return 0;
    }
    len = order.length;
    return len;
  }
}

export function shoutChaiOrder(order) {
  if (typeof order !== "string") {
    return "";
  }
  order = order.trim();
  order = order.toUpperCase();
  let orderVal = order;
  if (orderVal.length === 0) {
    return "";
  }
  return orderVal;
}

export function whisperChaiOrder(order) {
  if (typeof order !== "string") {
    return "";
  }
  order = order.trim();
  order = order.toLowerCase();
  let orderVal = order;
  if (orderVal.length === 0) {
    return "";
  }
  return orderVal;
}

export function hasSpecialIngredient(order, ingredient) {
  if (typeof order !== "string" || typeof ingredient !== "string") {
    return false;
  }

  order = order.toLowerCase();
  ingredient = ingredient.toLowerCase();

  if (order.includes(ingredient)) {
    return true;
  }
  if (!order.includes(ingredient)) {
    return false;
  }
}

export function getFirstAndLastChar(order) {
  let obj;
  if (typeof order !== "string") {
    return null;
  }
  order = order.trim();
  if (order.length === 0) {
    return null;
  }
  obj = { first: order.charAt(0), last: order.at(-1) };
  return obj
}

// Second 👇

export function repeatPattern(pattern, times) {
  if (typeof pattern !== "string" || times < 0 || !Number.isInteger(times)) {
    return "";
  }
  return pattern.repeat(times);
}

export function extractRangoliCenter(design, start, end) {
  if (typeof design !== "string" || isNaN(start) || isNaN(end)) {
    return "";
  }
  return design.slice(start, end);
}

export function splitAndJoinRangoli(colorString, oldSep, newSep) {
  if (typeof colorString !== "string") {
    return "";
  }
  return colorString.split(oldSep).join(newSep);
}

export function replaceRangoliColor(design, oldColor, newColor) {
  if (
    typeof design !== "string" ||
    typeof oldColor !== "string" ||
    typeof newColor !== "string"
  ) {
    return "";
  }
  return design.replaceAll(oldColor, newColor);
}

export function makeRangoliBorder(char, length) {
  if (typeof char !== "string" || length < 0) {
    return "";
  }
  return char.repeat(length).slice(0, length);
}

// Third 👇

export function parseFare(fareString) {
  if (typeof fareString !== "string") {
    return -1;
  }
  fareString = parseFloat(fareString);
  if (isNaN(fareString)) {
    return -1;
  }
  return fareString;
}

export function roundFare(amount, decimalPlaces) {
  if (isNaN(amount) || decimalPlaces < 0 || !Number.isInteger(decimalPlaces)) {
    return "";
  }
  return amount.toFixed(decimalPlaces);
}

export function calculateSurge(baseFare, surgeMultiplier) {
  if(typeof baseFare !== "number" || typeof surgeMultiplier !== "number"){
    return 0
  }
  if(baseFare < 0 || surgeMultiplier < 0 ){
    return 0
}
return Math.ceil(baseFare * surgeMultiplier)
}

export function findCheapestAndCostliest(...fares) {

  const validFares = fares.filter(
    fare => typeof fare === "number" && !isNaN(fare)
  );

  if (validFares.length === 0) {
    return null;
  }

  const cheapest = Math.min(...validFares);
  const costliest = Math.max(...validFares);

  return { cheapest, costliest };
}

export function getDistanceDifference(from, to) {
  from = parseInt(from)
to = parseInt(to)

if(isNaN(from) || isNaN(to)){
    return -1
}

return Math.abs(from - to)
}

// Fourth 

export function addToCart(cart, item) {
  if (!Array.isArray(cart)) {
    return -1;
  }
  if (typeof item !== "string" || item.trim() === "") {
    return cart.length;
  }
  cart.push(item);
  return cart.length;
}

export function addUrgentItem(cart, item) {
  if (!Array.isArray(cart)) return [];
  if (typeof item !== "string" || item.trim() === "") return cart;
  cart.unshift(item);
  return cart;
}

export function removeLastItem(cart) {
  if (!Array.isArray(cart) || cart.length === 0) return undefined;
  let temp = cart.at(-1);
  cart.pop();
  return temp;
}

export function isInCart(cart, item) {
  
if(!Array.isArray(cart)) return false
if(cart.includes(item)) return true
if(!cart.includes(item)) return false
}

export function mergeCarts(cart1, cart2) {
  if (!Array.isArray(cart1)){
    cart1 = []
}
if(!Array.isArray(cart2)){
    cart2 = []
}
let temp = cart1.concat(cart2);
return temp;

}

// Five 

export function findPassenger(passengers, name) {
  if (!Array.isArray(passengers)) return undefined;
  if (typeof name !== "string") return undefined;

  const search = name.toLowerCase();

  return passengers.find((e) => {
    return typeof e.name === "string" && e.name.toLowerCase() === search;
  });
}

export function getPassengerIndex(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== "string") return -1;
  name = name.toLowerCase();
  const index = passengers.findIndex((e) => {
    return e.name.toLowerCase() == name;
  });
  return index;
}

export function isAnyWaitlisted(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) return false;
  const checking = passengers.some((e) => {
    return e.status === "waitlisted";
  });
  return checking;
}

export function areAllConfirmed(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) return false;

  const confirmed = passengers.every((e) => {
    return e.status === "confirmed";
  });
  return confirmed;
}

export function getWaitlistedPassengers(passengers) {
  if (!Array.isArray(passengers)) return [];

  const waitlisted = passengers.filter((e) => {
    return e.status === "waitlisted";
  });

  return waitlisted;
}

// Six

export function getItemNames(items) {
  if (!Array.isArray(items)) return [];

  const item = items.map((e) => {
    return e.name;
  });
  return item;
}

export function getAffordableItems(items, maxPrice) {
  if (!Array.isArray(items) || typeof maxPrice !== "number") return [];

  const item = items.filter((e) => {
    return e.price <= maxPrice;
  });
  return item;
}

export function calculateTotal(items) {
  if (!Array.isArray(items) || items.length === 0) return 0;

  const initVal = 0;
  const item = items.reduce((total, amt) => {
    return total + amt.price * amt.qty;
  }, initVal);
  return item;
}

export function sortByPrice(items, ascending) {
  if (!Array.isArray(items)) return [];
let srt;
if(ascending){
  srt = [...items].sort((a,b) => {
    return a.price - b.price
  })
} else if(!ascending){
  srt = [...items].sort((a, b) => {
    return b.price - a.price
  })
}
// console.log(items)
// console.log(srt)
return srt
}

export function formatBill(items) {
 if (!Array.isArray(items) || items.length === 0) return "";

const amt = items.map((e) => {
  return `${e.name} x ${e.qty} = Rs.${e.price * e.qty}`
})
console.log(amt.join("\n"))
return amt.join("\n")
}

// Seven 

export function getFamilyNames(registry) {
if(typeof registry !== "object") return []
if(registry === null || registry == {} || Array.isArray(registry)) return []

const key = Object.keys(registry)
return key
}

export function getAllFamilies(registry) {
  if(typeof registry !== "object") return []
if(registry === null || registry == {}) return []

const key = Object.values(registry)
return key
}

export function getRationCardEntries(registry) {
  if(typeof registry !== "object") return []
if(registry === null || registry == {}) return []

const key = Object.entries(registry)
return key
}

export function hasRationCard(registry, cardId) {
  if(typeof registry !== "object") return false
if(registry === null || registry == {}) return false
if(typeof cardId !== "string") return false

const key = registry.hasOwnProperty(cardId)
return key
}

export function removeRationCard(registry, cardId) {
  if(typeof registry !== "object") return false
  if(registry === null || registry == {}) return false
if(typeof cardId !== "string") return false

console.log(registry[cardId])
const key = registry.hasOwnProperty(cardId)
if(key){
  delete registry[cardId]
  return true
} else {
  return false
}
}

// Eight 

export function createPaanOrder(basePaan, customizations) {
  if (typeof basePaan !== "object" || basePaan === null) return {};
  if (typeof customizations !== "object") {
    return Object.assign({}, basePaan);
  }
  return Object.assign({}, basePaan, customizations);
}

export function freezeMenu(menu) {
  if (typeof menu !== "object" || menu === null) return {};
  return Object.freeze(menu);
}

export function updatePrices(menu, increase) {
  if (typeof menu !== "object" || menu === null) return {};
  if (typeof increase !== "number") return {};

  const arrObj = Object.entries(menu);

  const addVal = arrObj.map(([e, i]) => {
    return [e, i + increase];
  });

  return Object.fromEntries(addVal);
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  if (typeof regularMenu !== "object" || typeof specialsMenu !== "object") {
    regularMenu = {};
    specialsMenu = {};
  }
  const temp = Object.assign({}, regularMenu, specialsMenu);
  return temp;
}


// Nine

export function writePostcard(sender, receiver, message) {
  if (
    typeof sender !== "string" ||
    typeof receiver !== "string" ||
    typeof message !== "string"
  ) {
    return "";
  }

  if (
    sender.trim().length === 0 ||
    receiver.trim().length === 0 ||
    message.trim().length === 0
  ) {
    return "";
  }
  return `Priy ${receiver},\n\n${message}\n\nAapka/Aapki,\n${sender}`;
}

export function isValidPincode(code) {
  if (typeof code !== "string") return false;
  if (code.startsWith("0") || code.length < 6 || code.length > 6) {
    return false;
  }

  if (!/^\d+$/.test(code)) return false;
  if (/^\d+$/.test(code)) return true;
}

export function formatPostcardField(label, value, width) {
  if (typeof label !== "string" || typeof value !== "string") return "";
  if (width) return label.padEnd(width) + ": " + value;
  return label.padEnd(12) + ": " + value;
}

export function isFromState(address, stateCode) {
  if (typeof address !== "string" || typeof stateCode !== "string")
    return false;
  if (address.endsWith(stateCode)) return true;
  if (!address.endsWith(stateCode)) return false;
}

export function countVowels(message) {

 if (typeof message !== "string") {
    return 0;
  }

  let matches = message.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}

// Ten 

export function getDataType(value) {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (Array.isArray(value)) return "array";
  if (typeof value === "object") return "object";
  if (typeof value === "function") return "function";
}

export function isValidParcelWeight(weight) {
  if(weight < 0 || weight === 0) return false
if(weight === Infinity || weight === null || isNaN(weight)) return false
if(typeof weight === "string") return false

let temp = Number.isFinite(weight)
return temp
}

export function isWholeNumber(value) {
  if(typeof value === "string" || isNaN(value)) return false
if(value === Infinity) return false

let temp = Number.isInteger(value)
if(temp) return true
if(!temp) return false
}

export function isNotANumber(value) {
  if(typeof value === "string") return false
if(value === undefined || value === null) return false

const temp = Number.isNaN(value)
if(temp) return true
if(!temp) return false
}

export function isTruthy(value) {
  let temp = Boolean(value)

if(temp) return true
if(!temp) return false
}

// Eleven 

export function parcelToJSON(parcel) {
  try {
    if (parcel === undefined) return "";
    if (parcel === null) return "null";

    return JSON.stringify(parcel);
  } catch (error) {
    return "";
  }
}

export function jsonToParcel(jsonString) {
  try {
    if (typeof jsonString !== "string" || !JSON.stringify(jsonString))
      return null;
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

export function convertToString(value) {
  return String(value);
}

export function convertToNumber(value) {
  return Number(value);
}

export function stringToChars(str) {
  if (typeof str !== "string" || str.trim().length === 0) return [];

  return Array.from(str);
}


// Tewelve 

export function createThaliDescription(thali) {
  if (
    typeof thali !== "object" ||
    thali === null ||
    typeof thali.name !== "string" ||
    !Array.isArray(thali.items) ||
    typeof thali.price !== "number" ||
    typeof thali.isVeg !== "boolean"
  )
    return "";
  return `${thali.name.toUpperCase()} ${thali.isVeg ? "(Veg)" : "(Non-Veg)"} - Items: ${thali.items.join(", ")} - Rs.${thali.price.toFixed(2)}`;
}

export function getThaliStats(thalis) {
  if (!Array.isArray(thalis) || thalis.length === 0) return null;
  let veg = thalis.filter((e) => {
    if (e.isVeg) return e.isVeg;
  });
  let nonveg = thalis.filter((e) => {
    return e.isVeg === false;
  });

  let avg = thalis.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  avg = avg / thalis.length;

  const min = thalis.reduce((min, item) => {
    return item.price < min ? item.price : min;
  }, thalis[0].price);

  const max = thalis.reduce((min, item) => {
    return item.price > min ? item.price : min;
  }, thalis[0].price);

  let nam = thalis.map((e) => {
    return e.name;
  });

  return {
    totalThalis: thalis.length,
    vegCount: veg.length,
    nonVegCount: nonveg.length,
    avgPrice: avg.toFixed(2),
    cheapest: min,
    costliest: max,
    names: nam,
  };
}

export function searchThaliMenu(thalis, query) {
  if (!Array.isArray(thalis) || typeof query !== "string") return [];

  query = query.toLowerCase();

  const result = thalis.filter((e) => {
    return (
      e.name.toLowerCase().includes(query) ||
      e.items.some((item) => item.toLowerCase().includes(query))
    );
  });

  return result;
}

export function generateThaliReceipt(customerName, thalis) {
  if (
    !Array.isArray(thalis) ||
    typeof customerName !== "string" ||
    thalis.length === 0
  )
    return "";

  let temp = thalis.map((e) => {
    return `- ${e.name} x Rs.${e.price}`;
  });
  // console.log(temp)
  const tot = thalis.reduce((arr, cur) => {
    return arr + cur.price;
  }, 0);

  return `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${temp.join("\n")}\n---\nTotal: Rs.${tot}\nItems: ${thalis.length}`;
}
