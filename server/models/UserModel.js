import mongoose from "mongoose";

// TODO:- Define the User Schema
const userSchema = mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:false},
    googleId: {type: String, required:true},
    id:{type:String},
})

export default mongoose.model("User", userSchema)