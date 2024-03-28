const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const connectDB=(url)=>{
   return mongoose
    .connect(url)
}
module.exports=connectDB