// Some Data Types questions

// Question One 👇

function maskAadhaar(aadhaarNumber) {
  if (/\s/.test(aadhaarNumber)) return "INVALID";
  if (/\D/.test(aadhaarNumber)) return "INVALID";
  if (typeof aadhaarNumber !== "string" || aadhaarNumber.length !== 12)
    return "INVALID";

  let data = aadhaarNumber.slice(-4);
  let temp = data.padStart(aadhaarNumber.length, "X");
  let store = temp.slice(0, 4);
  return `${store}-${store}-${data}`;
}

// Question Two 👇

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

// Question Three 👇

function fixBollywoodTitle(title) {
  if (typeof title !== "string") return "";
  if (title.length === 0) return "";

  let val = title.trim().replace(/\s+/g, " ");
  val = val.toLowerCase();

  const exceptions = [
    "ka",
    "ki",
    "ke",
    "se",
    "aur",
    "ya",
    "the",
    "of",
    "in",
    "a",
    "an",
  ];

  let temp = val.split(" ");

  let data = temp.map((e, i) => {
    if (i === 0) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    if (exceptions.includes(e)) {
      return e;
    }
    return e.charAt(0).toUpperCase() + e.slice(1);
  });

  return data.join(" ");
}

// Question Four 👇

function calculateGST(amount, category) {
  if (!Number.isFinite(amount) || amount < 0 || amount === 0) return null;
  if (typeof category !== "string" || typeof category === undefined)
    return null;

  category = category.toLowerCase();

  let catData = ["essential", "food", "standard", "electronics", "luxury"];
  if (!catData.includes(category)) return null;

  let gstAmt = 0;
  let totalAmt = 0;
  let gstRate = 0;

  if (category === "luxury") {
    gstAmt += (amount * 28) / 100;
    totalAmt += amount + gstAmt;
    gstRate += 28;
  } else if (category === "electronics") {
    gstAmt += (amount * 18) / 100;
    totalAmt += amount + gstAmt;
    gstRate += 18;
  } else if (category === "standard") {
    gstAmt += (amount * 12) / 100;
    totalAmt += amount + gstAmt;
    gstRate += 12;
  } else if (category === "food") {
    gstAmt += (amount * 5) / 100;
    totalAmt += amount + gstAmt;
    gstRate += 5;
  } else if (category === "essential") {
    gstAmt += 0;
    totalAmt += amount + gstAmt;
    gstRate += 0;
  }
  return {
    baseAmount: amount,
    gstRate: gstRate,
    gstAmount: parseFloat(Number(gstAmt).toFixed(2)),
    totalAmount: parseFloat(Number(totalAmt).toFixed(2)),
  };
}

// Question Five 👇

export function generateLocalPass(passenger) {
  if (typeof passenger !== "object" || passenger === null)
    return "INVALID PASS";
  if (
    !passenger.classType ||
    !passenger.from ||
    !passenger.name ||
    !passenger.to
  )
    return "INVALID PASS";
  if (
    passenger.classType.length === 0 ||
    passenger.to.length === 0 ||
    passenger.name.length === 0 ||
    passenger.from.length === 0
  )
    return "INVALID PASS";
  if (
    passenger.classType.toLowerCase() !== "first" &&
    passenger.classType.toLowerCase() !== "second"
  )
    return "INVALID PASS";

  let from = `${passenger.from.charAt(0).toUpperCase()}${passenger.from.slice(1).toLowerCase()}`;
  let to = `${passenger.to.charAt(0).toUpperCase()}${passenger.to.slice(1).toLowerCase()}`;
  const passID = `${passenger.classType[0].toUpperCase()}${passenger.from.slice(0, 3).toUpperCase()}${passenger.to.slice(0, 3).toUpperCase()}`;
  return `MUMBAI LOCAL PASS\n---\nName: ${passenger.name.toUpperCase()}\nFrom: ${from}\nTo: ${to}\nClass: ${passenger.classType.toUpperCase()}\nPass ID: ${passID}`;
}

// Question Six 👇

export function parseWhatsAppMessage(message) {
  if (typeof message !== "string") return null;
  if (
    !message.includes(", ") ||
    !message.includes(" - ") ||
    !message.includes(": ")
  ) {
    return null;
  }

  const commaIdx = message.indexOf(", ");
  const date = message.substring(0, commaIdx);

  const dashIdx = message.indexOf(" - ");
  const time = message.substring(commaIdx + 2, dashIdx);
  const senderStart = dashIdx + 3;
  const colonIndex = message.indexOf(": ", senderStart);
  if (colonIndex === -1) return null;

  const sender = message.substring(senderStart, colonIndex);

  const textStart = colonIndex + 2;
  const text = message.substring(textStart).trim();

  const words = text.split(" ").filter((word) => word.trim() !== "");
  const wordCount = words.length;

  const lowerText = text.toLowerCase();
  let sentiment = "neutral";

  if (
    lowerText.includes("😂") ||
    lowerText.includes(":)") ||
    lowerText.includes("haha")
  ) {
    sentiment = "funny";
  } else if (
    lowerText.includes("❤") ||
    lowerText.includes("love") ||
    lowerText.includes("pyaar")
  ) {
    sentiment = "love";
  }

  return { date, time, sender, text, wordCount, sentiment };
}

// Question Seven 👇
// Question Eight 👇
// Question Nine 👇
// Question Ten 👇
// Question Eleven 👇
// Question Twelve 👇
