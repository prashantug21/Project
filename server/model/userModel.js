const mongoose= require('mongoose');


const User =new Schema({
    Username:{type:String, required:true},
    email:{type:String, required:true}
},{
    collection:'Verified'
})

const UserModel=mongoose.model('UserData',User)

module.exports= UserModel;