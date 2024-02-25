import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    clerkId: { type: String,required:true,unique:true },
    email :{type:String , required:true , unique:true},
    userName :{type:String , required:true , unique:true},
    firstName :{type:String , },
    lastName: { type: String,  },
    planId: { type: Number,default :1},
    creditBalance: { type: Number,default:10 },
    photos :{type:String , required:true}
}, { timestamps: true })

const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;