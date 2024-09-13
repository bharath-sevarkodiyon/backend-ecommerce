const mongoose = require('mongoose');
const cors = require('cors')
const express = require('express')
const cookieParser = require('cookie-parser');
require('dotenv').config();
// const session = require('express-session');

const productApi = require('./api/productApi')
const userApi = require('./api/userApi');
const viewCartApi = require('./api/viewCartApi');
const productCategoryApi = require('./api/productCategoryApi');
const adminApi = require('./api/adminApi');
const orderApi = require('./api/orderApi');

const app = express()

app.use(express.json());
app.use(cors({
  origin: 'https://frontend-ecommerce-rouge-tau.vercel.app', // Replace with your frontend URL
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookieParser());

// api
app.use('/api', productApi)

app.use('/api', productCategoryApi)

app.use('/', userApi)

app.use('/', adminApi)

app.use('/api', viewCartApi)

app.use('/api', orderApi)


// Creating a mongoDB Connection and initializing port
function connectDatabase(){
  mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, (error) => {
      if (error) {
        console.error('Error starting server:', error);
      } else {
        console.log(`Server started listening on port ${PORT}...`);
      }
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
