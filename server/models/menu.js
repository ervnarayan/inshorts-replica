import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    label: {type: String, required: true, unique: true},    
    href: {type: String, required: true}

}, {timestamps: true})

export default mongoose.model('Menu', menuSchema);