const mongoose=require('mongoose')

const userScheama = new mongoose.Schema(
    {
        userID:{
            type: String,
            required: true
        },
        firstName:{
            type: String,
            required: true
        },
        surename:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        dateOfBirth:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        }
    }
)

module.exports=mongoose.model('User',userScheama);