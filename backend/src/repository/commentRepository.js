import commentModel from "../models/commentModel.js";

const getById = async (video_id) => {
    try {
        const comment = await commentModel.find({video_id: video_id});
        return comment;
    } catch (error) {
        console.log(error);
    }
}


const postComment = async ({video_id, username, comment}) => {
    const newComment = new commentModel({
        video_id,
        username, 
        comment
    });
    await newComment.save();
}


export default {getById, postComment}
