//Total of Cart item 
  const cartItems = [
    { id: 1, qty: 3, price: 300 },
    { id: 2, qty: 2, price: 100 }
  ];
  
  function getTotal(cartItems) {
    let total = 0;
  
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const itemTotal = item.qty * item.price;
      total += itemTotal;
    }
    console.log(total)
  }
  getTotal(cartItems)