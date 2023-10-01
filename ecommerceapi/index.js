const express = require("express")
const app = express();

// connecting to mongoose
const mongoose = require("mongoose")
// importing the .env file
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const categoryRoute = require("./routes/category")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(cors())           

dotenv.config();
app.use(express.json())

app.use("/api/auth", authRoute)                
app.use("/api/users", userRoute)                
app.use("/api/products", productRoute)                
app.use("/api/carts", cartRoute)                
app.use("/api/orders", orderRoute)    
app.use("/api/checkout", stripeRoute)    
app.use("/api/categories", categoryRoute)                

mongoose.connect(process.env.MONGO_URL
).then(()=>console.log("DBConnection Successfull")).catch((err)=>{
    console.log(err);
})







app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running on port 5000")
})