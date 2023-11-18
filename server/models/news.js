import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    "hash_id": {type: String, required: true, unique: true},
    "author_name": {type: String, required: true},
    "content": {type: String, required: true},
    "source_url": {type: String, required: true},
    "source_name": {type: String, required: true},
    "title": {type: String, required: true},
    "important": {type: Boolean, required: true, default: true},
    "image_url": {type: String, required: true},
    "shortened_url": {type: String, required: true},
    "video_url": {type: String,},
    "score": {type: Number,},
    "position_start_time": {type: Date,},
    "position_expire_time": {type: Date,},   
}, {timestamps: true});

export default mongoose.model('News', newsSchema);