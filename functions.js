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
// Question Four 👇
// Question Five 👇
// Question Six 👇
// Question Seven 👇
// Question Eight 👇
// Question Nine 👇
// Question Ten 👇
// Question Eleven 👇
// Question Twelve 👇
