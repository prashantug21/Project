const mongoose =require("mongoose") 

const User =new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    OTP:{
        type:Number,
        required:true
    },
    createdAt: Date,
    expireAt: Date,
},{
    collection:'RequestSignUp'
})


const UserModelVerify=mongoose.model('UserDataVerify',User)

module.exports=UserModelVerify;