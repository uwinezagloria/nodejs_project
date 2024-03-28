
const express=require('express')
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const app=express()
//middleware
app.use(express.json())


//routes


app.use('/api/v1/tasks',tasks)
app.use(notFound)



const port=process.env.PORT || 3000
const start=async ()=>{
    try{
await connectDB(process.env.MONGO_URI)
app.listen(port,console.log(`server is listening on port ${port}`))
    }
    catch(err0r){
console.log(error)
    }
}
start()
