// Practice all type of number method and questions

const pnrData = {
  pnr: "1234567890",
  train: { number: "12301", name: "Rajdhani Express", from: "NDLS", to: "HWH" },
  classBooked: "3A",
  passengers: [
        { name: "Rahul Kumar", age: 28, gender: "M", booking: "B1", current: "B1" },
        { name: "Priya Sharma", age: 25, gender: "F", booking: "WL5", current: "B3" },
        { name: "Amit Singh", age: 60, gender: "M", booking: "WL12", current: "WL8" }
      ]
};

if (typeof pnrData !== "object" || pnrData === null)
  console.log("Object nahi h");
if (typeof pnrData.pnr !== "string" || pnrData.pnr.length !== 10)
  console.log("Bahi PNR Galat Hai");
if (!pnrData.train) console.log("Train Object Nahi Hai Bhai Sahab");
if (!Array.isArray(pnrData.passengers) || pnrData.passengers.length === 0)
  console.log("Bhai Passenger Array Nahi hai");

let confirmed = pnrData.passengers.map((e) => {
  if (e.current.startsWith("B") || e.current.startsWith("S"))
    return "CONFIRMED";
  else if (e.current.startsWith("WL")) return "WAITING";
  else if (e.current.startsWith("CAN")) return "CANCELLED";
  else if (e.current.startsWith("RAC")) return "RAC";
  else return ""
});
// console.log(confirmed);



let discount;

if (coupon === "FIRST50") {
}
if (coupon === "FLAT100") {
}
if (coupon === "FREESHIP") {
}
if (
  coupon === null ||
  coupon === undefined ||
  !coupon.includes(["FIRST50", "FLAT100", "FREESHIP"])
)
  discount = 0;