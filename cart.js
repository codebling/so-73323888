module.exports = class Cart {
  items;
  constructor(oldCart) {
    this.items = oldCart?.items ?? [];
  }

  addDrink(item) {
    let cartItem = this.items.find(i => i._id == item._id);
    if (cartItem == null) {
      cartItem = {
        _id: item._id,
        qty: 0,
        unitPrice: parseFloat(item.price),
      };
      this.items.push(cartItem);
    }
    cartItem.qty++;
  }
  get totalQty() {
    return this.items.reduce( (totalQty, item) => totalQty += item.qty, 0);
  }
  get totalPrice() {
    return this.items.reduce( (totalPrice, item) => totalPrice += item.qty * item.unitPrice, 0.00);
  }
}
