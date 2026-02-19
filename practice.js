// Do Practice here and build a storg logic

let cart = [
  { name: "Biryani", price: 300, qty: 1, addons: ["Raita:30", "naan:40"] },
  { name: "Noodles", price: 150, qty: 0, addons: ["naan:20"] },
  { name: "Noodles", price: 200, qty: 3, addons: ["chole:60"] },
];
let coupon = "FLAT100";

if (!Array.isArray(cart) || cart.length === 0) {
    return null;
  }

  console.log()

  const validItems = cart.filter(item => item.qty > 0);

  if (validItems.length === 0) {
    return null;
  }

  const items = validItems.map(item => {
    let addonTotal = 0;
    console.log(item)

    if (Array.isArray(item.addons)) {
      addonTotal = item.addons.reduce((sum, addon) => {
        console.log(addon)
        const parts = addon.split(":"); 
        const price = parseFloat(parts[1]);
        return sum + price;
      }, 0);
    }

    const itemTotal = (item.price + addonTotal) * item.qty;

    return {
      name: item.name,
      qty: item.qty,
      basePrice: item.price,
      addonTotal: addonTotal,
      itemTotal: itemTotal
    };
  });

  const subtotal = items.reduce((sum, item) => {
    return sum + item.itemTotal;
  }, 0);

 
  let deliveryFee = 0;

  if (subtotal < 500) {
    deliveryFee = 30;
  } else if (subtotal >= 500 && subtotal < 1000) {
    deliveryFee = 15;
  } else {
    deliveryFee = 0;
  }

  
  let gst = subtotal * 0.05;
  gst = parseFloat(gst.toFixed(2));

 
  let discount = 0;
  let normalizedCoupon = typeof coupon === "string" ? coupon.toLowerCase() : null;

  if (normalizedCoupon === "first50") {
    let fiftyPercent = subtotal * 0.5;
    discount = Math.min(fiftyPercent, 150);
  } 
  else if (normalizedCoupon === "flat100") {
    discount = 100;
  } 
  else if (normalizedCoupon === "freeship") {
    discount = deliveryFee;
    deliveryFee = 0;
  } 
  else {
    discount = 0;
  }

  let grandTotal = subtotal + deliveryFee + gst - discount;

  grandTotal = Math.max(grandTotal, 0);
  grandTotal = parseFloat(grandTotal.toFixed(2));

  return {
    items: items,
    subtotal: subtotal,
    deliveryFee: deliveryFee,
    gst: gst,
    discount: discount,
    grandTotal: grandTotal
  };








































































// { items: {
//   name: string,
//   qty: number,
//   basePrice: number,
//   addonTotal: number,
//   itemTotal: number
// },
//  subtotal: number,
//  deliveryFee: number,
//  gst: number,
//  discount: number,
//  grandTotal: number }
