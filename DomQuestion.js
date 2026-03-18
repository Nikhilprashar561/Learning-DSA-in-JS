// Here we Practice total 12 DOM question practice it easy to hard level

// 01 Question 👇

export function createSweetItem(name, price, category) {
  if (!name || !price || !category) return null;
  if (typeof name !== "string" || typeof category !== "string") return null;
  if (typeof price !== "number") return null;

  const createElem = document.createElement("div");
  const createh3 = document.createElement("h3");
  const createP = document.createElement("p");
  const createSpan = document.createElement("span");

  createElem.classList.add("sweet-item");
  createh3.textContent = name;
  createP.classList.add("price");
  createP.textContent = `₹${price}`;
  createSpan.classList.add("category");
  createSpan.textContent = category;

  createElem.appendChild(createh3);
  createElem.appendChild(createP);
  createElem.appendChild(createSpan);

  return createElem;
}

export function buildMenuBoard(sweets) {
  if (!Array.isArray(sweets)) return null;

  const divMenuBoard = document.createElement("div");
  divMenuBoard.setAttribute("id", "menu-board");
  if (sweets.length === 0) return divMenuBoard;

  let temp;

  for (let i = 0; i <= sweets.length - 1; i++) {
    temp = createSweetItem(sweets[i].name, sweets[i].price, sweets[i].category);
    divMenuBoard.appendChild(temp);
  }

  // divMenuBoard.appendChild(temp);
  return divMenuBoard;
}

export function addSpecialBadge(sweetElement, badgeText) {
   if (sweetElement === null || sweetElement === undefined) return null;
  if (typeof badgeText !== "string" || badgeText.length === 0) return null;

  const span = document.createElement("span");
  span.classList.add("special-badge");
  span.textContent = badgeText;

  sweetElement.append(span);

  return sweetElement;
}

// 02 Question 👇

export function updateChaiPrice(document, chaiType, newPrice) {
  if (typeof newPrice !== "number" || newPrice <= 0) return false;
  if (typeof chaiType !== "string" || chaiType.length === 0) return false;

  const priceChai = document.getElementById(`price-${chaiType}`);

  if (!priceChai) return false;

  priceChai.textContent = `₹${newPrice}`;

  if (priceChai) return true;
  if (!priceChai) return false;
}

export function getChaiPrice(document, chaiType) {
  const elem = document.getElementById(`price-${chaiType}`);

  if (!elem) return null;
  let data = elem.textContent;
  let db = data.slice(1);
  let convert = parseInt(db);

  elem.textContent = convert;
  return convert;
}

export function updateStallName(document, newName) {
  const cls = document.querySelector(".stall-name");

  if (!cls) return null;
  if (typeof newName !== "string" || newName.length === 0) return null;

  let temp = cls.textContent;
  cls.textContent = newName;

  return temp;
}

export function highlightCheapestChai(document) {
  const chaiElem = document.querySelectorAll(".chai-price");

  if(!chaiElem || chaiElem.length === 0) return null;

  let min = 1000;
  let cheapEst = null;

  chaiElem.forEach((e) => {
    let temp = e.textContent;
    let data = temp.slice(1);
    let convert = parseInt(data);

    if (convert < min) {
      min = convert;
      cheapEst = e;
    }
  });

  chaiElem.forEach((e) => {
    if (e === cheapEst) {
      e.classList.add("cheapest");
    } else {
      e.classList.remove("cheapest");
    }
  });

  return cheapEst.getAttribute("data-chai");
}

// 03 Question 👇

export function addColors(element, ...colors) {
  if (element === null || element === undefined) return -1;
  let temp = 0;

  colors.forEach((e) => {
    if (element.classList.contains(e)) {
      return;
    } else if (!element.classList.contains(e)) {
      element.classList.add(e);
      temp++;
    }
  });
  return temp;
}

export function removeColors(element, ...colors) {
  if (element === null || element === undefined) return -1;
  let temp = 0;
  colors.map((e) => {
    if (!element.classList.contains(e)) {
      return;
    } else if (element.classList.contains(e)) {
      element.classList.remove(e);
      temp++;
    }
  });
  return temp;
}

export function togglePattern(element, pattern) {
  if (element === null || element === undefined) return null;
  if (!element.classList.toggle(`pattern-${pattern}`)) {
    return false;
  } else if (element.classList.toggle) {
    return true;
  }
}

export function hasDesign(element, designName) {
  if (element === null || element === undefined) return false;
  if (element.classList.contains(`design-${designName}`)) {
    return true;
  } else if (!element.classList.contains(`design-${designName}`)) {
    return false;
  }
}

export function replaceDesign(element, oldDesign, newDesign) {
  if (element === null || element === undefined) return false;
  if (element.classList.contains(`design-${oldDesign}`)) {
    element.classList.remove(`design-${oldDesign}`);
    element.classList.add(`design-${newDesign}`);
    return true;
  } else if (!element.classList.contains(`design-${oldDesign}`)) {
    element.classList.add(`design-${newDesign}`);
    return false;
  }
}

export function getActiveColors(element) {
  if (element === null || element === undefined) return [];
  const getClass = element.classList;
  const arr = [];
  getClass.forEach((e) => {
    if (e.startsWith(`color-`)) {
      const color = e.slice(6);
      arr.push(color);
    }
  });
  return arr;
}

// 04 Question 👇

export function applyBaseStyle(element, color, size) {
  if (element === null || element === undefined) return null;

  element.style.backgroundColor = `${color}`;
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  element.style.borderRadius = `50%`;

  return element;
}

export function setPatternStyle(element, styles) {
  if (element === null || element === undefined) return -1;
  if (typeof styles !== "object" || styles === null) return 0;

  let temp = 0;

  for (const elem in styles) {
    element.style[elem] = `${styles[elem]}`;
    temp++;
  }

  return temp;
}

export function getComputedStyles(element, properties) {
  if (!Array.isArray(properties)) return null;
  if (element === null || element === undefined) return null;

  let obj = {};

  properties.map((e) => {
    obj[e] = element.style[e];
  });
  return obj;
}

export function toggleVisibility(element) {
  if (element === null || element === undefined) return null;

  let val = null;

  const itemCheck = element.style.display;
  if (itemCheck === "none") {
    element.style.display = "";
    val = element.style.display;
  } else {
    element.style.display = "none";
    val = element.style.display;
  }
  return val;
}

export function animateElement(element, frames) {
  if (element === null || element === undefined) return -1;
  if (!Array.isArray(frames) || frames.length === 0) return -1;

  let temp = 0;

  frames.forEach((e) => {
    element.style[Object.keys(e)[0]] = Object.values(e)[0];
    temp++;
  });
  return temp;
}

// 05 Question 👇
// 06 Question 👇
// 07 Question 👇
// 08 Question 👇
// 09 Question 👇
// 10 Question 👇
// 11 Question 👇
// 12 Question 👇