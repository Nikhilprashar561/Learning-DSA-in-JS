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