import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    stripeId: { type: String, required: true, unique: true },
    amount: { type: Number, unique: true },
    plans: {
        type:String,
    },
    credits: { type: Number },
    buyer:{type :mongoose.Types.ObjectId , ref:"User"}
    
}, { timestamps: true })
const Transaction = mongoose.models?.Transaction || mongoose.model("Transaction", transactionSchema)
export default  Transaction