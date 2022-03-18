const express= require('express')
const connectDb = require('./config/connectDb')
const authRoute = require('./routes/auth')
const contactRouter= require('./routes/contact');
const userRouter=require('./routes/user')
const app=express()
require('dotenv').config()


connectDb();
app.use(express.json());
app.use("/api/auth",authRoute);
app.use('/api/contacts',contactRouter);
app.use("/api/users",userRouter);

app.listen(process.env.port,()=> console.log('port is runing'))