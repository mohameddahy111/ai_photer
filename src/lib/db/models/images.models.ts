import mongoose ,  { Schema , Types } from "mongoose";
export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: string; 
    width?: number;
    height?: number;
    config?: object; 
    transformationUrl?: string; 
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
      _id: string;
      firstName: string;
      lastName: string;
    }
    // createdAt?: Date;
    // updatedAt?: Date;
  }
  
const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationTypes: { type: String, required: true },
    public_id: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    hiegth :{type: Number, },
    width :{type: Number, },
    config :{type: Number, },
    transformationUrl: { type: URL, },
    aspectRatio: { type:String },
    color: { type:String },
    prompt: { type:String },
    author: { type:Types.ObjectId , ref  :"User" },
    
}, { timestamps: true })


const Image = mongoose.models?.Image || mongoose.model("Image", ImageSchema);
export default Image