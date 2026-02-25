// Practice Some Javascript Function Based questions

// Question one 👇

export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  let check = ["plain", "masala", "onion", "butter", "paper", "cheese"];
  if (typeof type !== "string" || !check.includes(type)) return null;
  if (quantity <= 0 || isNaN(quantity)) return null;

  const addOn = isSpicy ? 10 : 0;
  let dosaPrice = 0;
  let totalAmt = 0;
  if (type === "plain") {
    dosaPrice = 40 + addOn;
    totalAmt += dosaPrice * quantity;
  }
  if (type === "masala") {
    dosaPrice = 60 + addOn;
    totalAmt += dosaPrice * quantity;
  }
  if (type === "onion") {
    dosaPrice = 50 + addOn;
    totalAmt += dosaPrice * quantity;
  }
  if (type === "butter") {
    dosaPrice = 70 + addOn;
    totalAmt += dosaPrice * quantity;
  }
  if (type === "paper") {
    dosaPrice = 90 + addOn;
    totalAmt += dosaPrice * quantity;
  }
  if (type === "cheese") {
    dosaPrice = 80 + addOn;
    totalAmt += dosaPrice * quantity;
  }
  return { type, quantity, pricePerDosa: dosaPrice, total: totalAmt };
}

// Question Two 👇

export const calcStrikeRate = (runs, balls) => {
  if (balls <= 0 || runs < 0) return 0;

  let strikeRate = 0;

  strikeRate = (runs / balls) * 100;

  return Number(strikeRate.toFixed(2));
};

export const calcEconomy = (runsConceded, overs) => {
  if (overs <= 0 || runsConceded < 0) return 0;
  let economy = 0;

  economy = runsConceded / overs;
  return Number(economy.toFixed(2));
};

export const calcBattingAvg = (totalRuns, innings, notOuts = 0) => {
  if (innings - notOuts <= 0) return 0;
  let avg = 0;

  avg = totalRuns / (innings - notOuts);

  return Number(avg.toFixed(2));
};

export const isAllRounder = (battingAvg, economy) => {
  if (battingAvg > 30 && economy < 8) {
    return true;
  } else {
    return false;
  }
};

export const getPlayerCard = (player) => {
  if (player === null || player === undefined || !player.name) return null;

  let strikerate = 0;
  strikerate = (player.runs / player.balls) * 100;

  let economy = 0;
  economy = player.runsConceded / player.overs;

  let battingAvg = 0;
  battingAvg = player.totalRuns / (player.innings - player.notOuts);

  let isAllRounder = false;
  if (battingAvg > 30 && economy < 8) {
    isAllRounder = true;
  } else {
    isAllRounder = false;
  }
  return {
    name: player.name,
    strikeRate: Number(strikerate.toFixed(2)),
    economy: Number(economy.toFixed(2)),
    battingAvg: Number(battingAvg.toFixed(2)),
    isAllRounder,
  };
};

// Question Three 👇

export function createTiffinPlan({ name, mealType = "veg", days = 30 } = {}) {
  if (typeof name !== "string" || name.trim().length === 0) {
    return null;
  }

  if (typeof mealType !== "string") {
    return null;
  }

  mealType = mealType.trim().toLowerCase();

  let dailyRate;

  if (mealType === "veg") {
    dailyRate = 80;
  } else if (mealType === "nonveg") {
    dailyRate = 120;
  } else if (mealType === "jain") {
    dailyRate = 90;
  } else {
    return null;
  }

  const totalCost = dailyRate * days;

  return {
    name: name.trim(),
    mealType,
    days,
    dailyRate,
    totalCost,
  };
}

export function combinePlans(...plans) {
  if (plans === null || plans.length === 0) return null;
  let totalRevenue = plans.reduce((sum, curr) => {
    return sum + curr.totalCost;
  }, 0);
  let veg = 0;
  let nonveg = 0;
  let mealBreakdown = plans.map((e) => {
    if (e.mealType === "veg") veg++;
    if (e.mealType === "nonveg") nonveg++;
    return {
      veg,
      nonveg,
    };
  });
  return {
    totalCustomers: plans.length,
    totalRevenue,
    mealBreakdown: mealBreakdown.at(-1),
  };
}

export function applyAddons(plan, ...addons) {
  if (!plan) return null;

  const totalAddonPrice = addons.reduce((sum, addon) => {
    return sum + addon.price;
  }, 0);

  const newDailyRate = plan.dailyRate + totalAddonPrice;
  const newTotalCost = newDailyRate * plan.days;

  return {
    ...plan,
    dailyRate: newDailyRate,
    totalCost: newTotalCost,
    addonNames: addons.map((addon) => addon.name),
  };
}

// Question Four 👇

export function createDialogueWriter(genre) {
  const temp = {
    action: function (hero, villain) {
      return `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`;
    },
    romance: function (hero, villain) {
      return `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`;
    },
    comedy: function (hero, villain) {
      return `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`;
    },
    drama: function (hero, villain) {
      return `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`;
    },
  };

  if (!temp[genre]) return null;
  return function (hero, villain) {
    if (!hero || !villain) return "...";
    return temp[genre](hero, villain);
  };
}

export function createTicketPricer(basePrice) {
  if (basePrice <= 0) return null;
  const func = {
    seatMultiplexer: function (seatType, isWeekend = false) {
      if (seatType === "gold") {
        let price = 0;
        if (isWeekend) {
          price = basePrice * 1.5 * 1.3;
        } else {
          price = basePrice * 1.5;
        }
        return Number(price.toFixed(2));
      } else if (seatType === "silver") {
        let price = 0;
        if (isWeekend) {
          price = basePrice * 1 * 1.3;
        } else {
          price = basePrice * 1;
        }
        return Number(price.toFixed(2));
      } else if (seatType === "platinum") {
        let price = 0;
        if (isWeekend) {
          price = basePrice * 2 * 1.3;
        } else {
          price = basePrice * 2;
        }
        return Number(price.toFixed(2));
      }
    },
  };
  return function (seatType, isWeekend) {
    if (!seatType || typeof seatType !== "string") return null;
    if (!["silver", "gold", "platinum"].includes(seatType)) return null;
    return func.seatMultiplexer(seatType, isWeekend);
  };
}

export function createRatingCalculator(weights) {
  if (typeof weights !== "object" || weights === null || Array.isArray(weights))
    return null;
  const avg = {
    average: function (score) {
      let avvg =
        (weights?.story ?? 0) * (score?.story ?? 0) +
        (weights?.acting ?? 0) * (score?.acting ?? 0) +
        (weights?.direction ?? 0) * (score?.direction ?? 0) +
        (weights?.music ?? 0) * (score?.music ?? 0);
      return Number(avvg.toFixed(1));
    },
  };
  return function (score) {
    if (!score) return null;
    return avg.average(score);
  };
}

// Question Five 👇

function createDabbawala(name, area) {
  let deliveries = [];
  let nextId = 1;

  return {
    addDelivery(from, to) {
      if (!from || !to) return -1;

      const delivery = {
        id: nextId,
        from,
        to,
        status: "pending",
      };

      deliveries.push(delivery);
      nextId++;

      return delivery.id;
    },

    completeDelivery(id) {
      const found = deliveries.find(d => d.id === id);

      if (!found || found.status === "completed") {
        return false;
      }

      found.status = "completed";
      return true;
    },

    getActiveDeliveries() {
      return deliveries
        .filter(d => d.status === "pending")
        .map(d => ({ ...d }));
    },

    getStats() {
      const total = deliveries.length;
      const completed = deliveries.filter(d => d.status === "completed").length;
      const pending = deliveries.filter(d => d.status === "pending").length;

      let successRate = "0.00%";

      if (total > 0) {
        successRate = ((completed / total) * 100).toFixed(2) + "%";
      }

      return {
        name,
        area,
        total,
        completed,
        pending,
        successRate,
      };
    },

    reset() {
      deliveries = [];
      nextId = 1;
      return true;
    }
  };
}

// Question Six 👇

export function processGuests(guests, filterFn) {
  if (!Array.isArray(guests) || typeof filterFn !== "function") {
    return [];
  }

  const result = [];

  for (let i = 0; i < guests.length; i++) {
    const guest = guests[i];

    if (filterFn(guest)) {
      result.push(guest);
    }
  }

  return result;
}

export function notifyGuests(guests, notifyCallback) {
  if (!Array.isArray(guests) || typeof notifyCallback !== "function") {
    return [];
  }

  const result = [];

  for (let i = 0; i < guests.length; i++) {
    const guest = guests[i];

    const callbackResult = notifyCallback(guest);

    result.push(callbackResult);
  }

  return result;
}

export function handleRSVP(guest, onAccept, onDecline) {
  if (!guest) return null;

  if (typeof onAccept !== "function" || typeof onDecline !== "function") {
    return null;
  }

  if (guest.rsvp === "yes") {
    return onAccept(guest);
  } else if (guest.rsvp === "no") {
    return onDecline(guest);
  } else {
    return null;
  }
}

export function transformGuestList(guests, ...transformFns) {
  if (!Array.isArray(guests)) return [];

  let result = guests;

  for (let i = 0; i < transformFns.length; i++) {
    const fn = transformFns[i];

    if (typeof fn === "function") {
      result = fn(result);
    }
  }

  return result;
}

// Question Seven 👇
// Question Eight 👇
// Question Nine 👇
// Question Ten 👇
// Question Eleven 👇
// Question Twelve 👇
