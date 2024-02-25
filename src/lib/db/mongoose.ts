import mongoose, { Mongoose } from 'mongoose'

const MONGODB = process.env.MONGODB
interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose>|null;
}
let cached: MongooseConnection = (global as any).mongoose
if (!cached) {
    cached = (global as any).mongoose = {
        conn :null , promise:null
    }
}
export const connect = async () => {
    if (cached.conn) return cached.conn
    if (! MONGODB) {
      throw new Error(`Cannot connect to Mongoose`)  
    }
    cached.promise = 
    cached.promise|| mongoose.connect(MONGODB , {dbName :'cluster0' , bufferCommands :false})
    cached.conn = await cached.promise
    return cached.conn
}

