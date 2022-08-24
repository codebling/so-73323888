const express = require('express');
const session = require('express-session');
const Cart = require('./cart');

const app = express();

app.use(session({
  secret: "hideSession",
  resave: true,
  saveUninitialized: true,
  cookie: {
      sameSite: true,
      httpOnly: false,
  }
}));

app.get('/', (req, res) => res.send('hi'));

app.get("/add_to_cart/:name", async (req, res) => {

  // let db = await connect();
  // let cursor = await db.collection("products").find({})
  // let finalData = await cursor.toArray();
  const name= req.params.name;

  // const singleDrink = await finalData.find((product) => product.name === name);
  let cart;
  if (!req.session.cart) req.session.cart = cart = new Cart({});

  else cart = new Cart(req.session.cart);

  req.session.cart = cart;
  // cart.addDrink(singleDrink);
  let id = (Math.random() * 10) | 0;
  cart.addDrink({_id: id, name, price: '' + Math.random() * 5,});
  console.log(`route log`, req.session.cart,req.session.cart.totalPrice,req.session.cart.totalQty,req.session.cookie)

  res.send(cart);
});  

app.listen(5551);