import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema({
    video_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    }
})
const Comment = mongoose.model("comment", commentSchema)

export default Comment;
