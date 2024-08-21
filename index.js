const mongoose = require('mongoose');
const express = require('express')
const productApi = require('./api/productApi')
const userApi = require('./api/userApi');
const viewCartApi = require('./api/viewCartApi');
const orderApi = require('./api/orderApi');

const app = express()

app.use(express.json());


// api
app.use('/api', productApi)

app.use('/api', userApi)

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