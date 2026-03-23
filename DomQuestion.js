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

export function setupAddButton(button, thaliElement, itemName) {
  if (button === null || thaliElement === null || itemName === null)
    return null;
  if (
    button === undefined ||
    thaliElement === undefined ||
    itemName === undefined
  )
    return null;

  function attach() {
    function handler() {
      const li = document.createElement("li");
      li.textContent = `${itemName}`;
      thaliElement.appendChild(li);
    }
    button.addEventListener("click", handler);

    return function () {
      button.removeEventListener("click", handler);
    };
  }

  const detach = attach();

  return detach;
}

export function setupRemoveButton(button, thaliElement) {
  if (thaliElement === null || thaliElement === undefined) return null;
  if (button === null || button === undefined) return null;

  function addClick() {
    function handle() {
      if (thaliElement.lastElementChild) {
        thaliElement.lastElementChild.remove();
      } else if (!thaliElement.lastElementChild) {
        return;
      }
    }
    button.addEventListener("click", handle);

    return function () {
      button.removeEventListener("click", handle);
    };
  }
  const detach = addClick();

  return detach;
}

export function setupToggleItem(button, thaliElement, itemName) {
  if (button === null || button === undefined) return null;
  if (thaliElement === null || thaliElement === undefined) return null;
  if (itemName === null || itemName === undefined) return null;

  function attach() {
    function handleClick() {
      if (
        thaliElement.lastElementChild &&
        thaliElement.textContent === itemName
      ) {
        thaliElement.lastElementChild.remove();
      } else if (!thaliElement.lastElementChild) {
        const li = document.createElement("li");
        li.textContent = `${itemName}`;
        thaliElement.appendChild(li);
      }
    }
    button.addEventListener("click", handleClick);

    return function () {
      button.removeEventListener("click", handleClick);
    };
  }

  const detach = attach();
  return detach;
}

export function createThaliManager(thaliElement, counterElement) {
  if (thaliElement === null || thaliElement === undefined) return null;
  if (counterElement === null || counterElement === undefined) return null;

  function attach() {
    let temp = 1;
    function addItem(name) {
      const li = document.createElement("li");
      li.textContent = `${name}`;
      thaliElement.appendChild(li);
      counterElement.textContent = temp++;
      return thaliElement;
    }
    function removeItem(name) {
      const item = thaliElement.children;

      for(let i = 0; i < item.length; i++){
        if(item[i].textContent.trim() === name){
          item[i].remove()
          counterElement.textContent = thaliElement.children.length;
          return true
        }
      }
      return false
    }
    function getCount() {
      let num = null;
      if (thaliElement.lastElementChild) {
        num = thaliElement.children.length;
      }
      return num;
    }
    function clear() {
      thaliElement.innerHTML = "";
      temp = 0;
      counterElement.textContent = temp;
      return counterElement;
    }
    return {
      addItem,
      removeItem,
      getCount,
      clear,
    };
  }
  const detachObj = attach();
  return detachObj;
}

// 06 Question 👇

export function setupGuestList(containerElement) {
  if (containerElement === null || containerElement === undefined) return null;

  function wrapeer() {
    containerElement.addEventListener("click", function (event) {
      const removeBtn = event.target.closest(".remove-btn");

      if (removeBtn) {
        const guest = removeBtn.closest(".guest-item");

        if (guest) {
          guest.remove();
        }
      }
    });

    function addGuest(name, side) {
      const div = document.createElement("div");
      div.classList.add("guest-item");

      div.setAttribute("data-name", `${name}`);
      div.setAttribute("data-side", `${side}`);

      const span = document.createElement("span");
      const btn = document.createElement("button");

      span.textContent = `${name}`;
      btn.classList.add("remove-btn");
      btn.textContent = `Remove`;

      div.appendChild(span);
      div.appendChild(btn);
      containerElement.appendChild(div);
      return div;
    }
    function removeGuest(name) {
      const getData = document.querySelector(
        `.guest-item[data-name="${name}"]`,
      );
      if (getData) {
        getData.remove();
        return true;
      } else if (!getData) {
        return false;
      }
    }
    function getGuests() {
      const res = [];
      const getAll = document.querySelectorAll(".guest-item");
      getAll.forEach((e) => {
        res.push({
          name: e.dataset.name,
          side: e.dataset.side,
        });
      });
      return res;
    }
    return {
      addGuest,
      removeGuest,
      getGuests,
    };
  }
  const detach = wrapeer();
  return detach;
}

export function setupThemeSelector(containerElement, previewElement) {
  if (containerElement === null || containerElement === undefined) return null;
  if (previewElement === null || previewElement === undefined) return null;

    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");

    button1.textContent = `traditional`;
    button2.textContent = `modern`;
    button3.textContent = `royal`;

    button1.classList.add(`theme-btn`);
    button2.classList.add(`theme-btn`);
    button3.classList.add(`theme-btn`);

    button1.setAttribute("data-theme", `traditional`);
    button2.setAttribute("data-theme", `modern`);
    button3.setAttribute("data-theme", `royal`);

    containerElement.appendChild(button1);
    containerElement.appendChild(button2);
    containerElement.appendChild(button3);

    containerElement.addEventListener("click", function (event) {
      const themeBtn = event.target.closest('.theme-btn')

      if(!themeBtn) return null;
      const selct = themeBtn.getAttribute('data-theme')
      previewElement.className = selct;
      previewElement.setAttribute('data-theme', selct)
    });
    function getTheme() {
      return previewElement.getAttribute('data-theme') || null;
    }
    return {
      getTheme,
    };
}

export function setupCardEditor(cardElement) {
  if(cardElement === null || cardElement === undefined) return null;

  cardElement.addEventListener('click', function (event){
    const getDB = event.target;

    if(getDB.hasAttribute('data-editable')){
      const elem = cardElement.querySelector('.editing');

      if(elem){
        elem.classList.remove("editing");
        elem.contentEditable = "false"
      }
      getDB.contentEditable = "true";
      getDB.classList.add("editing");
      getDB.focus();
    } else if(getDB === cardElement){
      const got = cardElement.querySelector('.editing');
      if(got){
        got.classList.remove("editing");
        got.contentEditable = "true"
      }
    }
  })

  function getContent(field){
    const getElem = cardElement.querySelector(`[data-editable="${field}"]`)
    if(!getElem) return null;

    return getElem.textContent;
  }
  return {
     getContent
  }

}

// 07 Question 👇
export function validateName(name) {
  if (typeof name !== "string") {
    return {
      valid: false,
      error: "Naam string hona chahiye",
    };
  }
  if (name.trim().length < 2) {
    return {
      valid: false,
      error: "Naam mein kam se kam 2 characters hone chahiye",
    };
  }
  if (name.trim().length > 50) {
    return {
      valid: false,
      error: "Naam 50 characters se zyada nahi ho sakta",
    };
  }
  if (!/\s/.test(name) || !/^[A-Za-z ]+$/.test(name)) {
    return {
      valid: false,
      error: "Naam mein sirf letters aur spaces allowed hain",
    };
  }
  return { valid: true, error: null };
}

export function validateDate(dateString) {
  if (typeof dateString !== "string") {
    return {
      valid: false,
      error: "Date string honi chahiye",
    };
  }
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const overall = `${year}-${month}-${day}`;
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(overall) || !regex.test(dateString)) {
    return {
      valid: false,
      error: "Date YYYY-MM-DD format mein honi chahiye",
    };
  }

  if (dateString < overall) {
    return {
      valid: false,
      error: "Date aaj ya future ki honi chahiye",
    };
  }

  return {
    valid: true,
    error: null,
  };
}

export function validateAartiType(type) {
  if (typeof type !== "string") {
    return {
      valid: false,
      error: "Aarti type string hona chahiye",
    };
  }
  if (!["morning", "evening", "special"].includes(type)) {
    return {
      valid: false,
      error: "Aarti type morning, evening, ya special mein se hona chahiye",
    };
  }
  return { valid: true, error: null };
}

export function setupAartiForm(formElement, onSuccess, onError) {
  if (formElement === null || formElement === undefined) return null;
  if (typeof onSuccess !== "function" || typeof onError !== "function")
    return null;

  let nam = null;
  let dat = null;
  let artiType = null;
  let errorsArray = []

  function attach() {
    function handle(e) {
      e.preventDefault();
      nam = formElement.elements.name.value;
      dat = formElement.elements.date.value;
      artiType = formElement.elements.aartiType.value;
      if(!nam) errorsArray.push("Name is required");
      if(!dat) errorsArray.push("Date is required");
      if(!artiType) errorsArray.push("AartiType is required")
      if (errorsArray.length > 0) {
        onError(errorsArray);
        return;
      }
      onSuccess({ name: nam, date: dat, aartiType: artiType });
    }
    formElement.addEventListener("submit", handle);

    return function () {
      formElement.removeEventListener("submit", handle);
    };
  }

  const detach = attach();
  return detach;
}

export function createBookingSummary(booking) {
  if (booking === null || booking === undefined) return null;

  if (!booking.name || !booking.date || !booking.aartiType) return null;

  const div = document.createElement("div");
  div.classList.add("booking-summary");

  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  h3.textContent = `Booking Confirmation`;

  p1.classList.add("booking-name");
  p2.classList.add("booking-date");
  p3.classList.add("booking-type");

  p1.textContent = `Bhakt: ${booking.name}`;
  p2.textContent = `Date: ${booking.date}`;
  p3.textContent = `Aarti: ${booking.aartiType}`;

  div.appendChild(h3);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  return div;
}

// 08 Question 👇

export function renderKiteCard(kite) {
  if (kite === null || kite === undefined) return null;
  const { name, color, size, maker, image } = kite;
  if (!name || !color || !size || !maker || !image) {
    return null;
  }
  const div = document.createElement("div");

  div.classList.add("kite-card");

  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  img.src = `${image}`;
  img.alt = `${name}`;

  h3.classList.add("kite-name");
  h3.textContent = `${name}`;

  p1.classList.add("kite-maker");
  p1.textContent = `by ${maker}`;

  p2.classList.add("kite-info");
  p2.textContent = `${size} - ${color}`;

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p1);
  div.appendChild(p2);

  return div;
}

export function renderGallery(container, kites) {
  if (container === null || container === undefined) return -1;
  if (!Array.isArray(kites)) return -1;

  container.innerHTML = "";

  let temp = 0;

  for (let kite of kites) {
    const card = renderKiteCard(kite);
    if (card == null) continue;
    container.appendChild(card);
    temp++;
  }
  return temp;
}
export function filterKites(container, kites, filterFn) {
  if (container === null) return -1;
  if (!Array.isArray(kites)) return -1;
  if (typeof filterFn !== "function") return -1;

  container.innerHTML = "";

  let temp = 0;

  const fil = kites.filter(filterFn);
  for (let kite of fil) {
    const card = renderKiteCard(kite);
    if (card == null) continue;
    container.appendChild(card);
    temp++;
  }
  return temp;
}

export function sortAndRender(container, kites, sortField, order) {
  if (container === null) return [];
  if (!Array.isArray(kites)) return [];

  const copy = [...kites];

  copy.sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];

    if (order === "desc") {
      return valB.localeCompare(valA);
    } else {
      return valA.localeCompare(valB);
    }
  });

  for (let kite of copy) {
    const card = renderKiteCard(kite);
    container.appendChild(card);
  }
  return copy;
}

export function renderEmptyState(container, message) {
  if (container === null || container === undefined) return false;
  if (container.children.length > 0) return false;

  if (container.children.length < 1) {
    const p = document.createElement("p");
    p.classList.add("empty-state");

    p.textContent = `${message}`;

    container.appendChild(p);
    return true;
  }
}

// 09 Question 👇

export function findQueueContainer(element) {
  if (element === null || element === undefined) return null;

  const ances = element.closest(".queue-container");
  if (!ances) return null;
  return ances;
}

export function getNextInQueue(element) {
  if (element === null || element === undefined) return null;
  const nextSibling = element.nextElementSibling;
  if (!nextSibling) return null;

  return nextSibling;
}

export function getPreviousInQueue(element) {
  if (element === null || element === undefined) return null;
  const prevSibling = element.previousElementSibling;
  if (!prevSibling) return null;
  return prevSibling;
}

export function getQueuePosition(element) {
  if (element === null || element === undefined) return -1;
  if (!element.parentNode) return -1;

  const find = element.parentNode.children;

  if (!find || find === null) return -1;

  for (let i = 0; i < find.length; i++) {
    if (find[i] === element) {
      return i + 1;
    }
  }
  return -1;
}

export function moveToFront(element) {
  if (element === null || element === undefined) return false;

  const prnt = element.parentNode;
  if (!prnt) return false;

  if (element === prnt.firstElementChild) return false;
  const add = element.parentNode.insertBefore(
    element,
    prnt.firstChild,
  );
  if(add) return true;
  if (!add) return false;

  return true;
}

export function removeFromQueue(element) {
  if (element === null || element === undefined) return null;
  const chk = element.parentNode;
  if (!chk) return null;
  const remove = element.parentNode.removeChild(element);

  return remove;
}

export function getQueueStats(queueContainer) {
    if (queueContainer === null || queueContainer === undefined) return null;

  let total = 0;
  let waiting = 0;
  let serving = 0;
  let completed = 0;

  const chld = queueContainer.children;

  for (let child of chld) {
    if (child.classList.contains("waiting")) {
      waiting++;
    }
    if (child.classList.contains("serving")) {
      serving++;
    }
    if (child.classList.contains("completed")) {
      completed++;
    }
    total++;
  }
  return {
    total,
    waiting,
    serving,
    completed,
  };
}

// 10 Question 👇

export function createPandalElement(pandal) {
  if (pandal === null || pandal === undefined || !pandal) return null;
  const { name, zone, theme, budget, rating } = pandal;

  if (!name || !zone || !theme || !budget || !rating) {
    return null;
  }

  if (typeof budget !== "number") return null;
  if (typeof rating !== "number") return null;

  const div = document.createElement("div");
  div.classList.add("pandal");

  div.dataset.name = `${name}`;
  div.dataset.zone = `${zone}`;
  div.dataset.theme = `${theme}`;
  div.dataset.budget = `${budget}`;
  div.dataset.rating = `${rating}`;

  div.textContent = name;

  return div;
}

export function getPandalInfo(element) {
  if (element === null || element === undefined) return null;

  const chmaka = element.dataset;

  return {
    name: chmaka.name,
    zone: chmaka.zone,
    theme: chmaka.theme,
    budget: Number(chmaka.budget),
    rating: Number(chmaka.rating),
  };
}

export function updatePandalRating(element, newRating) {
  if (element === null || element === undefined) return null;

  if (!element.dataset.rating) return null;

  if (typeof newRating !== "number") return null;
  if (newRating < 0 || newRating > 5) return null;

  const oldOne = element.dataset.rating;
  element.dataset.rating = newRating;

  return Number(oldOne);
}

export function filterPandalsByZone(container, zone) {
  if (container === null || container === undefined) return [];
  if (typeof zone !== "string") return [];

  const pandal = container.querySelectorAll(".pandal");

  let arr = [];

  for (let key of pandal) {
    if (key.dataset.zone === zone) {
      arr.push(key);
    }
  }

  return arr;
}

export function getPandalsByBudgetRange(container, min, max) {
  if (container === null || container === undefined) return [];
  if (typeof min !== "number" || typeof max !== "number") return [];

  const pandal = container.querySelectorAll(".pandal");

  const arr = [];

  for (const element of pandal) {
    const value = Number(element.dataset.budget);
    if (value <= max && value >= min) {
      arr.push(element);
    }
  }
  return arr;
}

export function sortPandalsByRating(container) {
  if (container === null || container === undefined) return [];
  const arr = Array.from(container.querySelectorAll('.pandal'));

  arr.sort((a, b) => {
    return Number(b.dataset.rating) - Number(a.dataset.rating);
  });

  arr.forEach((e) => container.appendChild(e))

  return arr;
}

// 11 Question 👇
// 12 Question 👇