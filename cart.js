function Cart(oldCart) {
  this.products = oldCart.products || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0.00;

  this.addDrink = function(item) {
    let storeItem = this.products;
    if (!storeItem.hasOwnProperty("item")) {
      
      storeItem = this.products = {item: item};
      this.totalQty = 1;
      this.totalPrice = parseFloat(item.price);

    } else {

      storeItem = {item: item};
      this.products = storeItem;
      Object.defineProperties(storeItem, {
          currentQty: {
              enumerable: false,
              writable: true
          },
          price: {
              enumerable: false,
              writable: true
          }
      },
      
      );
      storeItem.currentQty++;
      storeItem.price = parseFloat(storeItem.item.price * storeItem.currentQty);
      this.totalQty++;
      this.totalPrice += parseFloat(storeItem.item.price);
    }
  }
}

