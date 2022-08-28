const express = require('express');
const app = express();
const router=express.Router();

const User=require('../models/user.model')

app.use(express.json);


router.post('/', async (req,res)=>{
   const surename=req.body.sureName;
   const password=req.body.password;

   const user=await User.find();

   for (const i of user){
       if(surename==i.surename && password === i.password){
           res.json(i)
       }else {
           res.send("Incorrect Password")
       }
   }


/*

    const user=new User(
        {
            userID: req.body.userID,
            firstName : req.body.firstName,
            surename : req.body.surename,
            gender : req.body.gender,
            dateOfBirth : req.body.birthday,
            password : req.body.password,
            phoneNumber : req.body.phoneNumber,
            email : req.body.email
        }
    )
*/


})

module.exports = router