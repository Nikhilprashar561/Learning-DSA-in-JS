// Some Intersting Question on loops 

// Question One 👇

export function chaiTapriRevenue(customers) {
  if (
    customers <= 0 ||
    typeof customers === "string" ||
    !Number.isInteger(customers)
  ) {
    return {
      totalChai: 0,
      totalRevenue: 0,
    }
  }
  let adraktemp = 1; // 2
  let cuttingtemp = 1; // 2
  let adrakChai = 0;
  let cuttingChai = 0;

  for (let i = 1; i <= customers; i++) {
    if (i % 3 === 0) {
      adrakChai = adraktemp * 15; // 15
      adraktemp++;
    } else {
      cuttingChai = cuttingtemp * 10; // 10 + 20 + 30 + 40
      cuttingtemp++;
    }
  }

  let totalPaisa = adrakChai + cuttingChai;

  return {
    totalChai: customers,
    totalRevenue: totalPaisa,
  };
}


// Question Two 👇

export function cricketScoreboard(balls) {
  if (!Array.isArray(balls) || balls.length === 0) {
  return { totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0 };
}

let wickets = 0
let totalRuns = 0
let totalBalls = 0
let fours = 0
let sixes = 0

for(let i = 0;  i < balls.length; i++){
  if(wickets >= 10) {
    break;
  };
  if(balls[i] === -1) wickets++;

  if(balls[i] === 4) fours++;
  if(balls[i] === 6) sixes++;
  if(balls[i] !== -1) totalRuns = balls[i] + totalRuns
  totalBalls++;
}

return { totalRuns, totalBalls, wickets, fours, sixes }
  
}

// Question Three 👇

export function calculateAutoFare(distance, waitingMinutes = 0) {
  if (distance <= 0 || typeof distance !== "number") return -1;
  if (waitingMinutes < 0) return -1;

  distance = Math.ceil(distance);
  waitingMinutes = Math.ceil(waitingMinutes);

  if (!waitingMinutes) {
    waitingMinutes = 0;
  }

  let n = 1;
  let m = 0;
  let price = 0;

  while (n <= distance) {
    if (n === 1) price = price + 30;
    if (n > 1 && n <= 5) price = price + 15;
    if (n > 5) price = price + 10;
    n++;
  }
  let charge = 0;

  while (waitingMinutes > 0) {
    charge += 5;
    waitingMinutes -= 2;
  }

  let overall = price + charge;

  // console.log(overall)
  return overall;
}

// Question Four 👇

export function buildPlaylist(songs, maxDuration) {
  if (!Array.isArray(songs)) return { count: 0, totalDuration: 0 };
  if (maxDuration <= 0 || typeof maxDuration !== "number") return { count: 0, totalDuration: 0 };

  let countValue = 0;
  let totalDuration = 0;
  let temp = 0;

  for (let i = 0; i < songs.length; i++) {
    if (songs[i] <= 0 || isNaN(songs[i]) || typeof songs[i] !== "number")
      continue;

    temp += songs[i];
    if (temp > maxDuration) {
      break;
    }
    totalDuration = songs[i] + totalDuration;
    countValue++;
  }

  return { count: countValue, totalDuration };
}

// Question Five 👇

export function sabziMandiBill(shoppingList, priceList) {
  let arr = [];
  let totalBill = 0;

  let cost = 0;
  for (const element of shoppingList) {
    let data = priceList[element.name];
    if (data === undefined) continue;
    if (data > 80) continue;
    cost = data * element.qty;
    arr.push({
      name: element.name,
      qty: element.qty,
      cost: cost,
    });
    totalBill = cost + totalBill;
  }

  console.log({
    items: arr,
    totalBill,
  });
  return {
    items: arr,
    totalBill,
  };
}

// Question Six 👇

export function diwaliLightsPlan(lightStrings, budget) {
  if (
    !Array.isArray(lightStrings) ||
    budget <= 0 ||
    typeof budget !== "number"
  ) {
    return { selected: [], totalLength: 0, totalCost: 0 };
  }
  let are = [];
  let arr = [];
  let totalCost = 0;
  let array = [];
  let cost = 0;
  for (const element of lightStrings) {
    if (element.color === "golden") {
      cost = element.length * 50;
      totalCost += cost;
      array.push(cost);
    } else if (element.color === "white") {
      cost = element.length * 30;
      totalCost += cost;
      array.push(cost);
    } else if (element.color === "multicolor") {
      cost = element.length * 40;
      totalCost += cost;
      array.push(cost);
    } else {
      cost = element.length * 35;
      totalCost += cost;
      array.push(cost);
    }
    are.push({
      color: element.color,
      length: element.length,
      cost: cost,
    });
  }

  while (totalCost > budget) {
    let remove = are.pop();
    totalCost = totalCost - remove.cost;
  }
  let temp = are.reduce((sum, curr) => {
    return sum + curr.length;
  }, 0);

  return { selected: are, totalLength: temp, totalCost };
}


// Question Seven 👇

export function iplPointsTable(matches) {
    if (!Array.isArray(matches) || matches.length === 0) {
    return [];
  }

  const tbl = {};

  for (let i = 0; i < matches.length; i++) {

    const { team1, team2, result, winner } = matches[i];

    // console.log(table)

    if (!tbl[team1]) {
      tbl[team1] = { team: team1, played: 0, won: 0, lost: 0, tied: 0, noResult: 0, points: 0 };
    }

    if (!tbl[team2]) {
      tbl[team2] = { team: team2, played: 0, won: 0, lost: 0, tied: 0, noResult: 0, points: 0 };
    }

    tbl[team1].played++;
    tbl[team2].played++;

    if (result === "win") {

      tbl[winner].won++;
      tbl[winner].points += 2;

      const loser = winner === team1 ? team2 : team1;
      tbl[loser].lost++;

    } 
    else if (result === "tie") {

      tbl[team1].tied++;
      tbl[team2].tied++;

      tbl[team1].points += 1;
      tbl[team2].points += 1;

    } 
    else if (result === "no_result") {

      tbl[team1].noResult++;
      tbl[team2].noResult++;

      tbl[team1].points += 1;
      tbl[team2].points += 1;

    }
  }

  const resArr = Object.values(tbl);

  resArr.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return a.team.localeCompare(b.team);
  });

  return resArr;
}


// Question Eight 👇

export function calculateEMI(principal, monthlyRate, emi) {
  if (
    typeof principal !== "number" ||
    typeof monthlyRate !== "number" ||
    typeof emi !== "number"
  ) {
    return { months: -1, totalPaid: -1, totalInterest: -1 };
  }
  if (principal <= 0 || monthlyRate <= 0 || emi <= 0) {
    return { months: -1, totalPaid: -1, totalInterest: -1 };
  }


  let remaining = principal;
  let months = 0;
  let totalPaid = 0;

  let firstMonthInt = principal * monthlyRate;

  if (emi <= firstMonthInt) {
    return { months: -1, totalPaid: -1, totalInterest: -1 };
  }

  while (remaining > 0) {
    let interest = remaining * monthlyRate;
    remaining = remaining + interest;

    if (remaining < emi) {
      totalPaid += remaining;
      remaining = 0;
    } else {
      remaining = remaining - emi;
      totalPaid += emi;
    }
    months++;
  }

  let totalInterest = totalPaid - principal;

  totalInterest = Number(totalInterest.toFixed(2));
  totalPaid = Number(totalPaid.toFixed(2));
  // console.log("Yeh Kya hai",totalInterest)

  // console.log({month, totalPaid, totalInterest})
  return { months, totalPaid, totalInterest };
}


// Question Nine 👇
// Question Ten 👇
// Question Eleven 👇
// Question Twelve 👇