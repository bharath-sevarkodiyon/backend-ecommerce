const mongoose = require('mongoose');
const express = require('express')
const session = require('express-session');

const productApi = require('./api/productApi')
const userApi = require('./api/userApi');
const viewCartApi = require('./api/viewCartApi');
const orderApi = require('./api/orderApi');
const productCategoryApi = require('./api/productCategoryApi');
const adminApi = require('./api/adminApi');

const app = express()

app.use(express.json());

app.use(session({
  secret: '531c4d07a93fe127ad54ec71266492b1d578824a41fb9ab0a0aa0ae37028841e', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// api
app.use('/api', productApi)

app.use('/api', productCategoryApi)

app.use('/', userApi)

app.use('/', adminApi)

app.use('/api', viewCartApi)

app.use('/api', orderApi)


// Creating a mongoDB Connection and initializing port
function connectDatabase(){
  mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => {
    app.listen(5000, (error) => {
      console.log("Server started listining on port 5000...");
    })
    console.log('Mongoose connected to the database');
  })
  .catch((err) => {
    if (err) {
      console.error(`Mongoose connection failed, ${err}`);
    }
  })
}
connectDatabase()