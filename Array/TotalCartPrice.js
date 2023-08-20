//find the total cart item price 

const cartItems = [

    {id: 1, qty: 3, price: 300},
  
    {id: 2, qty: 2, price: 100}
  
  ]

  var total =0 ;

  for(i=0;i<cartItems.length;i++){
    itemPrice = cartItems[i].qty * cartItems[i].price
    total+=itemPrice
  }

  console.log("total cart price =", total)