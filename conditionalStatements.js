// Question one 👇

function cinemaPricing(age, weekend) {
  let price;
  if (typeof age !== "number" || isNaN(age) || age < 0) {
    return -1;
  } else if (age >= 0 && age <= 12) {
    if (weekend) {
      price = 11;
    } else if (!weekend) {
      price = 8;
    }
  } else if (age >= 13 && age <= 17) {
    if (weekend) {
      price = 15;
    } else if (!weekend) {
      price = 12;
    }
  } else if (age >= 18 && age <= 59) {
    if (weekend) {
      price = 18;
    } else if (!weekend) {
      price = 15;
    }
  } else if (age >= 60) {
    if (weekend) {
      price = 13;
    } else if (!weekend) {
      price = 10;
    }
  }
  return price;
}

cinemaPricing(2, true);

// Question two 👇

function getTrafficAction(color) {
  color = color.toLowerCase()
  let action;
  switch (color) {
    case "green":
      action = "GO";
      break;
    case "yellow":
      action = "SLOW DOWN";
      break;
    case "red":
      action = "STOP";
      break;
    case "flashing red":
      action = "STOP AND PROCEED WITH CAUTION";
      break;
    default:
      action = "INVALID SIGNAL";
      break;
  }
  return action;
}

getTrafficAction("Red")

// Question Three 👇

function calculateGrade(score, hasExtraCredit) {
  let grade;
  if (score < 0 || score > 100) {
    return "INVALID";
  }
  if (hasExtraCredit) {
    score = score + 5;
    if(score > 100){
      score = 100
    }
  }

  if(score >= 90 && score <= 100){
    grade = "A"
  }
  if(score >= 80 && score <= 89){
    grade = "B"
  }
  if(score >= 70 && score <= 79){
    grade = "C"
  }
  if(score >= 60 && score <= 69){
    grade = "D"
  }
  if(score >= 0 && score <= 59){
    grade = "F"
  }

  return grade;
}

calculateGrade(24, false)

// Question Four 👇

function getWeatherAdvice(temperature, isRaining) {
  if (temperature >= 35) {
    return "Too hot for hiking - stay indoors and hydrate";
  } else if (temperature >= 25) {
    return isRaining
      ? "Warm but rainy - consider indoor activities"
      : "Great weather for hiking - don't forget sunscreen";
  } else if (temperature >= 15) {
    return isRaining
      ? "Cool and rainy - bring waterproof gear if hiking"
      : "Perfect hiking weather - enjoy the trails";
  } else if (temperature >= 5) {
    return isRaining
      ? "Cold and wet - best to stay indoors"
      : "Chilly - wear layers for your hike";
  } else if (temperature < 5 || temperature < 0) {
    return "Too cold - stay warm indoors";
  }
}

getWeatherAdvice(25, false)

// Question Five 👇

function canBorrowBook(memberAge, hasValidCard, overdueBooks) {
  let result;
  if (memberAge < 6) {
    return (result = {
      allowed: false,
      message: "Too young - must be at least 6 years old",
    });
  } else if (!hasValidCard) {
    return (result = {
      allowed: false,
      message: "Invalid library card - please renew at the front desk",
    });
  } else if (overdueBooks > 0) {
    return (result = {
      allowed: false,
      message: `Please return your ${overdueBooks} overdue book(s) first`,
    });
  } else {
    return (result = {
      allowed: true,
      message: "You may borrow up to 3 books",
    });
  }
}

canBorrowBook(6, true, 0)

// Question Six 👇

function calculateShipping(weight, country, orderTotal) {
  let totalCost;
  if (weight <= 0 || orderTotal < 0) {
    totalCost = -1;
  } else if (country === "US") {
    if (weight > 0 && weight <= 1) {
      totalCost = orderTotal > 50 ? 0 : 5;
    } else if (weight > 1 && weight <= 5) {
      totalCost = orderTotal > 50 ? 0 : 10;
    } else if (weight > 5) {
      totalCost = orderTotal > 50 ? 0 : 15;
    }
  } else if (country !== "US") {
    if (weight > 0 && weight <= 1) {
      totalCost = orderTotal > 100 ? 0 : 15;
    } else if (weight > 1 && weight <= 5) {
      totalCost = orderTotal > 100 ? 0 : 25;
    } else if (weight > 5) {
      totalCost = orderTotal > 100 ? 0 : 40;
    }
  }
  return totalCost;
}

calculateShipping(0.5, "US", 50)

// Question Seven 👇

function calculateCoffeePrice(size, type, extras = {}) {
  let totalPrice = 0;

  if (!["small", "medium", "large"].includes(size)) {
    return -1;
  }

  if (!["regular", "latte", "cappuccino", "mocha"].includes(type)) {
    return -1;
  }

  if (size === "small") totalPrice += 3;
  if (size === "medium") totalPrice += 4;
  if (size === "large") totalPrice += 5;

  if (type === "latte") totalPrice += 1;
  if (type === "cappuccino") totalPrice += 1.5;
  if (type === "mocha") totalPrice += 2;

  if (extras.whippedCream) totalPrice += 0.5;
  if (extras.extraShot) totalPrice += 0.75;

  return Number(totalPrice.toFixed(2));
}

calculateCoffeePrice("small", "latte", false)

// Question 08 👇

export function calculateTax(income) {
  let taxTotal = 0;

  if (income <= 0) {
    return 0;
  }

  // Follow Steps top to bottom.
  if (income > 70000) {
    taxTotal += (income - 70000) * 0.30;
    income = 70000;
  }

  if (income > 30000) {
    taxTotal += (income - 30000) * 0.20;
    income = 30000;
  }

  if (income > 10000) {
    taxTotal += (income - 10000) * 0.10;
  }

  return taxTotal;
}

// Question 09 👇

function checkPasswordStrength(password) {
  
  if (typeof password !== "string" || password.length === 0) {
    return "weak";
  }

  let criteriaCount = 0;

  if (password.length >= 8) {
    criteriaCount++;
  }

  if (/[A-Z]/.test(password)) {
    criteriaCount++;
  }

  if(/[A-Z]/)

  if (/[a-z]/.test(password)) {
    criteriaCount++;
  }

  if (/[0-9]/.test(password)) {
    criteriaCount++;
  }

  if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
    criteriaCount++;
  }

  if (criteriaCount <= 1) {
    return "weak";
  } else if (criteriaCount <= 3) {
    return "medium";
  } else if (criteriaCount === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}

checkPasswordStrength("abcdefgh")

// Question 10 👇

function calculateTip(billAmount, serviceRating) {
  let totalBill;
  let temp;
  if (billAmount <= 0) {
    return null;
  }
  if (!Number.isInteger(serviceRating)) {
    return null;
  }
  if (serviceRating < 1 || serviceRating > 5) {
    return null;
  }
  if (serviceRating === 1) {
    temp = (billAmount * 5) / 100;
    totalBill = {
      tipPercentage: 5,
      tipAmount: temp,
      totalAmount: billAmount + temp,
    };
  } else if (serviceRating === 2) {
    temp = (billAmount * 10) / 100;
    totalBill = {
      tipPercentage: 10,
      tipAmount: temp,
      totalAmount: billAmount + temp,
    };
  } else if (serviceRating === 3) {
    temp = (billAmount * 15) / 100;
    totalBill = {
      tipPercentage: 15,
      tipAmount: temp,
      totalAmount: billAmount + temp,
    };
  } else if (serviceRating === 4) {
    temp = (billAmount * 20) / 100;
    totalBill = {
      tipPercentage: 20,
      tipAmount: temp,
      totalAmount: billAmount + temp,
    };
  } else if (serviceRating === 5) {
    temp = (billAmount * 25) / 100;
    totalBill = {
      tipPercentage: 25,
      tipAmount: temp,
      totalAmount: billAmount + temp,
    };
  }
  return totalBill;
}

calculateTip(100, 5)

// Question 11 👇

function calculateParkingFee(hours, vehicleType) {
  let parkingFees;
  let temp;
  if (hours <= 0) {
    return -1;
  }
  if (!["car", "motorcycle", "bus"].includes(vehicleType)) {
    return -1;
  }
  hours = Math.ceil(hours);
  if (vehicleType === "car") {
    if (hours > 0 && hours <= 1) {
      parkingFees = 5;
    } else if (hours > 1) {
      temp = hours - 1;
      parkingFees = 5 + temp * 3;
      if (parkingFees > 30) {
        parkingFees = 30;
      }
    }
  }
  if (vehicleType === "motorcycle") {
    if (hours > 0 && hours <= 1) {
      parkingFees = 3;
    } else if (hours > 1) {
      temp = hours - 1;
      parkingFees = 3 + temp * 2;
      if (parkingFees > 18) {
        parkingFees = 18;
      }
    }
  }
  if (vehicleType === "bus") {
    if (hours > 0 && hours <= 1) {
      parkingFees = 10;
    } else if (hours > 1) {
      temp = hours - 1;
      parkingFees = 10 + temp * 7;
      if (parkingFees > 60) {
        parkingFees = 60;
      }
    }
  }
  return parkingFees;
}

calculateParkingFee(5, "car")

// Question 12 👇

function getSeasonActivity(month, temperature) {
  let activities;
  if (month < 1 || month > 12) {
    return null;
  }
  if (month === 1 || month === 2 || month === 12) {
    if (temperature < 0) {
      activities = { season: "Winter", activity: "skiing" };
    } else if (temperature >= 0) {
      activities = { season: "Winter", activity: "ice skating" };
    }
  }
  if (month === 3 || month === 4 || month === 5) {
    if (temperature > 20) {
      activities = { season: "Spring", activity: "hiking" };
    } else if (temperature <= 20) {
      activities = { season: "Spring", activity: "museum visit" };
    }
  }
  if (month === 6 || month === 7 || month === 8) {
    if (temperature > 35) {
      activities = { season: "Summer", activity: "swimming" };
    } else if (temperature <= 35) {
      activities = { season: "Summer", activity: "cycling" };
    }
  }
  if (month === 9 || month === 10 || month === 11) {
    if (temperature > 15) {
      activities = { season: "Autumn", activity: "nature walk" };
    } else if (temperature <= 15) {
      activities = { season: "Autumn", activity: "reading at a cafe" };
    }
  }

  return activities;
}

getSeasonActivity(1, -5)
