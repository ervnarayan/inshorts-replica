import mongoose from "mongoose";
import { DB_URL } from "./config";

const dbConnect = async () => {
    await mongoose.connect(DB_URL, {
        useNewUrlParser: true
    }, (err)=>{
        if(!err){
            console.log(`Database connected successfuly..`)
        }else{
            console.log(`Unable to connect database ${err}`);
        }
    })
}

export default dbConnect;