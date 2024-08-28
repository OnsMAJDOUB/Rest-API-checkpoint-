 //require 
 const express = require ('express')
 const app = express()
  // middleware to parse JSON
 app.use(express.json());
 require("dotenv").config();


// create port 
 const PORT = process.env.PORT || 5002;

 // require connectDB
const connectDB = require("./config/connectDB")
connectDB();  
//require user routes
 const userRoutes = require('./routes/userRoutes');
 app.use('/api/users', userRoutes);

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is running on http://127.0.0.1:${PORT}`);
});
