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

function generateReportCard(student) {
  if (typeof student !== "object" || student === null) return null;
  if (typeof student.name !== "string" || student.name.length === 0)
    return null;
  if (
    typeof student.marks !== "object" ||
    Object.keys(student.marks).length === 0
  )
    return null;

  const totolMark = Object.values(student.marks);

  if (totolMark.some((e) => typeof e !== "number" || e < 0 || e > 100)) {
    return null;
  }

  let totalMarks = totolMark.reduce((arr, data) => {
    return arr + data;
  }, 0);
  const percentage = (totalMarks / (totolMark.length * 100)) * 100;

  let totolPercentage = parseFloat(percentage.toFixed(2));

  let grade;
  if (totolPercentage >= 90) {
    grade = "A+";
  } else if (totolPercentage >= 80) {
    grade = "A";
  } else if (totolPercentage >= 70) {
    grade = "B";
  } else if (totolPercentage >= 60) {
    grade = "C";
  } else if (totolPercentage >= 40) {
    grade = "D";
  } else if (totolPercentage < 40) {
    grade = "F";
  }

  const figOut = Object.entries(student.marks);

  let highestNum = figOut.reduce((highest, current) => {
    return current[1] > highest[1] ? current : highest;
  });

  let lowestNum = figOut.reduce((lowest, current) => {
    return current[1] < lowest[1] ? current : lowest;
  });
  let passSubject = figOut.filter((e) => {
    return e[1] >= 40;
  });
  let failSubject = figOut.filter((e) => {
    return e[1] < 40;
  });
  let passTotal = passSubject.map((e) => e[0]);
  let failTotal = failSubject.map((e) => e[0]);

  return {
    name: student.name,
    totalMarks,
    percentage: totolPercentage,
    grade,
    highestSubject: highestNum[0],
    lowestSubject: lowestNum[0],
    passedSubjects: passTotal,
    failedSubjects: failTotal,
    subjectCount: figOut.length,
  };
}


// Question Eight 👇

function iplAuctionSummary(team, players) {
  if (typeof team !== "object" || team === null) return null;
  if (
    typeof team.purse !== "number" ||
    team.purse <= 0
  )
    return null;
  if (!team.purse) return null;
  if (!Array.isArray(players) || players.length === 0) return null;

  let totalSpent = players.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const byRole = players.reduce((e, p) => {
    const rr = p.role;
    if (e[rr]) {
      e[rr] += 1;
    } else {
      e[rr] = 1;
    }
    return e;
  }, {});

  let remaining = team.purse - totalSpent;

  let costliestPlayer = players.reduce((h, cur) => {
    return cur.price > h.price ? cur : h;
  });
  let cheapestPlayer = players.reduce((h, cur) => {
    return cur.price < h.price ? cur : h;
  });

  let averagePrice = Math.round(totalSpent / players.length);

  let isOverBudget;
  if (totalSpent > team.purse) {
    isOverBudget = true;
  } else {
    isOverBudget = false;
  }

  return {
    teamName: team.name,
    totalSpent,
    remaining,
    playerCount: players.length,
    costliestPlayer,
    cheapestPlayer,
    averagePrice,
    byRole,
    isOverBudget,
  };
}

// Question Nine 👇

export function buildZomatoOrder(cart, coupon) {
  if (!Array.isArray(cart) || cart.length === 0) {
    return null;
  }

  const cartItem = cart.filter((e) => e.qty > 0);

  if (cartItem.length === 0) {
    return null;
  }

  const temp = cartItem.map((e) => {
    let addon = 0;
    if (Array.isArray(e.addons)) {
      addon = e.addons.reduce((sum, price) => {
        const splitPrice = price.split(":");
        const getPrice = parseFloat(splitPrice[1]);
        return sum + getPrice;
      }, 0);
    }
    const perItem = (e.price + addon) * e.qty;

    return {
      name: e.name,
      qty: e.qty,
      basePrice: e.price,
      addonTotal: addon,
      itemTotal: perItem,
    };
  });

  const subTotal = temp.reduce((sum, subTtl) => {
    return sum + subTtl.itemTotal;
  }, 0);

  let deliveryFee = 0;

  if (subTotal < 500) deliveryFee = 30;
  else if (subTotal >= 500 && subTotal < 1000) deliveryFee = 15;
  else {
    deliveryFee = 0
  }

  let gst = (subTotal * 5) / 100;
  gst = parseFloat(gst.toFixed(2));

  let discount = 0;
  let lowerCase = typeof coupon === "string" ? coupon.toLowerCase() : null;

  if (lowerCase === "first50") {
    let half = subTotal * 0.5;
    discount = Math.min(half, 150);
  } else if (lowerCase === "flat100") {
    discount = 100;
  } else if (lowerCase === "freeship") {
    discount = deliveryFee;
    deliveryFee = 0;
  } else {
    discount = 0;
  }

  let grandTotal = subTotal + deliveryFee + gst - discount;
  grandTotal = Math.max(grandTotal, 0);
  grandTotal = parseFloat(grandTotal.toFixed(2));

  return {
    items: temp,
    subtotal: subTotal,
    deliveryFee,
    gst,
    discount,
    grandTotal,
  };
}

// Question Ten 👇

export function analyzeUPITransactions(transactions) {
  if(!Array.isArray(transactions) || transactions.length === 0) return null


let postiveAmt = transactions.filter((e) => e.amount > 0);
let typeAcc = postiveAmt.filter((e) => {
  if (e.type === "credit" || e.type === "debit") {
    return e;
  }
});

if(postiveAmt.length === 0 || typeAcc.length === 0) return null

const totalCredit = typeAcc
  .filter((e) => e.type === "credit")
  .reduce((sum, curr) => {
    return sum + curr.amount;
  }, 0);
const totalDebit = typeAcc
  .filter((e) => e.type === "debit")
  .reduce((sum, curr) => {
    return sum + curr.amount;
  }, 0);

const netBalance = totalCredit - totalDebit;

const avg = typeAcc.reduce((sum, curr) => {
  return sum + curr.amount;
}, 0);

const transactionCount = typeAcc.length;

const avgTransaction = Math.round(avg / transactionCount);

const highestTransaction = typeAcc.reduce((sum, curr) => {
  return curr.amount > sum.amount ? curr : sum;
});

const categoryBreakdown = transactions.reduce((acc, curr) => {
  if(!acc[curr.category]) {
    acc[curr.category] = curr.amount;
  } else {
    acc[curr.category] += curr.amount;
  }
  return acc;
}, {});

const allAbove100 = typeAcc.every(e => e.amount > 100)
const hasLargeTransaction = typeAcc.some(e => e.amount >= 5000)

const frequentContact = transactions.reduce((acc, curr) => {
  acc[curr.to] = (acc[curr.to] || 0) + 1;
  return acc;
}, {});

let max = 0;
let result = null;

for (let t of typeAcc) {
  if (frequentContact[t.to] > max) {
    max = frequentContact[t.to];
    result = t.to;
  }
} 

return {
  totalCredit,
  totalDebit,
  netBalance,
  transactionCount,
  avgTransaction,
  highestTransaction,
  categoryBreakdown,
  frequentContact: result,
  allAbove100,
  hasLargeTransaction
}}

// Question Eleven 👇

export function validateForm(formData) {
  let error = {};

    if (
    typeof formData.name !== "string" ||
    formData.name.trim() === "" ||
    formData.name.trim().length < 2 ||
    formData.name.trim().length > 50
  ) {
    error.name = "Name must be 2-50 characters";
  }

  if (typeof formData.email !== "string") {
    error.email = "Invalid email format";
  } else {
    let atIndex = formData.email.indexOf("@");
    let lastAtIndex = formData.email.lastIndexOf("@");
    let dotIndex = formData.email.indexOf(".", atIndex);

    if (atIndex === -1 || atIndex !== lastAtIndex || dotIndex === -1) {
      error.email = "Invalid email format";
    }
  }

  if (typeof formData.phone !== "string") {
    error.phone = "Invalid Indian phone number";
  } else {
    if (
      formData.phone.length !== 10 ||
      !["6", "7", "8", "9"].includes(formData.phone[0]) ||
      /\D/.test(formData.phone)
    ) {
      error.phone = "Invalid Indian phone number";
    }
  }

  let ageValue = formData.age;

  if (typeof ageValue === "string") {
    ageValue = parseInt(ageValue);
  }

  if (
    isNaN(ageValue) ||
    !Number.isInteger(ageValue) ||
    ageValue < 16 ||
    ageValue > 100
  ) {
    error.age = "Age must be an integer between 16 and 100";
  }

  if (
    typeof formData.pincode !== "string" ||
    !/^[1-9][0-9]{5}$/.test(formData.pincode)
  ) {
    error.pincode = "Invalid Indian pincode";
  }

  let stateValue = formData?.state ?? "";

  if (typeof stateValue !== "string" || stateValue.trim() === "") {
    error.state = "State is required";
  }

  if (!Boolean(formData.agreeTerms)) {
    error.agreeTerms = "Must agree to terms";
  }

  let isValid;
  if (error && Object.keys(error).length === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  // console.log(error);

  return {
    isValid,
    errors: error,
  };
}

// Question Twelvbe 👇

export function processRailwayPNR(pnrData) {
  if (!pnrData || typeof pnrData !== "object") return null;
  if (typeof pnrData.pnr !== "string") return null;
  if (pnrData.pnr.length !== 10 || !/^\d{10}$/.test(pnrData.pnr)) return null;
  if (!pnrData.train || typeof pnrData.train !== "object") return null;
  if (!Array.isArray(pnrData.passengers) || pnrData.passengers.length === 0)
    return null;

  const pnrFormatted =
    pnrData.pnr.slice(0, 3) +
    "-" +
    pnrData.pnr.slice(3, 6) +
    "-" +
    pnrData.pnr.slice(6);

  const { number, name, from, to } = pnrData.train;
  const trainInfo = `Train: ${number} - ${name} | ${from} → ${to} | Class: ${pnrData.classBooked}`;

  const passengers = pnrData.passengers.map((p) => {
    let statusLabel;
    if (p.current === "CAN") statusLabel = "CANCELLED";
    else if (p.current.startsWith("WL")) statusLabel = "WAITING";
    else if (p.current.startsWith("RAC")) statusLabel = "RAC";
    else statusLabel = "CONFIRMED";

    return {
      formattedName: p.name.padEnd(20) + `(${p.age}/${p.gender})`,
      bookingStatus: p.booking,
      currentStatus: p.current,
      statusLabel,
      isConfirmed: statusLabel === "CONFIRMED",
    };
  });

  const confirmed = passengers.filter(
    (p) => p.statusLabel === "CONFIRMED",
  ).length;
  const waiting = passengers.filter((p) => p.statusLabel === "WAITING").length;
  const cancelled = passengers.filter(
    (p) => p.statusLabel === "CANCELLED",
  ).length;
  const rac = passengers.filter((p) => p.statusLabel === "RAC").length;

  const summary = {
    totalPassengers: passengers.length,
    confirmed,
    waiting,
    cancelled,
    rac,
    allConfirmed: passengers.every((p) => p.isConfirmed),
    anyWaiting: passengers.some((p) => p.statusLabel === "WAITING"),
  };

  const nonCancelled = passengers.filter((p) => p.statusLabel !== "CANCELLED");
  const chartPrepared = nonCancelled.every((p) => p.isConfirmed);

  return { pnrFormatted, trainInfo, passengers, summary, chartPrepared };
}
