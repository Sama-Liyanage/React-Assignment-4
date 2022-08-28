const mongoose=require('mongoose')

const createPostScheama = new mongoose.Schema(
    {
        userID:{
            type: String,
            required: true
        },
        date:{
            type: String,
            required: true
        },
        time:{
            type: String,
            required: true
        },
        tittle:{
            type: String,
            required: true
        },
        body:{
            type: String,
            required: true
        }
    }
)

module.exports=mongoose.model('createPost',createPostScheama);