const express=require('express')
const isAdmin = require('../middleware/isAdmin')
const router=express.Router()
const User=require('../models/auth')
const isAuth=require('../middleware/isAuth')

router.get('/',isAuth,isAdmin,async(req,res)=>{
try {
    const users=await User.find()
    res.send(users)
} catch (error) {
    res.status(500).send('server error')
    console.log(error)
}
})


    router.delete('/:userId',isAuth,isAdmin,async(req,res)=>{
        const {userId}=req.params
        try {
            await User.findByIdAndDelete(userId)
            res.send('user deleted')
        } catch (error) {
            res.status(500).send('error server')
        }
    })
    


module.exports=router

