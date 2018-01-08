/*ES 6 provides a way to use variables as object keys — you have to wrap the key in square brackets ([]).
Using the above example, you could write var meals = { [firstMeal]: 'oatmeal' }
and then meals would be { breakfast: 'oatmeal' } */


var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newPrice = Math.floor(99*Math.random() +1);
  var newItem = `${item}`;
  cart.push(new Object({[newItem]: newPrice}));

  console.log(`${item} has been added to your cart.`);

  return cart;

}

function viewCart() {
  if(cart.length > 0) {
      if (cart.length === 1) {
        console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] +".");
      }

      if (cart.length === 2) {
          console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] +" and " + Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])] + ".");
        }

        if (cart.length >= 3) {
          var itemList = [];
          for (let i = 0; i < cart.length; i++) {
            itemList.push(Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])]);
       //  console.log(itemList);
          }
          var last = itemList.pop();
          console.log("In your cart, you have " + itemList.join(", ") + ", and " + last + ".");
      }

  } else {
      console.log("Your shopping cart is empty.");
    }
}


function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    sum += price;
  }
  return sum;
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}
