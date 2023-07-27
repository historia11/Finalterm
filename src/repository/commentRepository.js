import Comment from "../models/commentModel.js";

const getById = async (videoId) => {
    try {
        const comment = await Comment.find({videoId: videoId});
        return comment;
    } catch (error) {
        console.log(error);
    }
}


const postComment = async ({videoId, username, comment}) => {
    const newComment = new commentModel({
        videoId,
        username, 
        comment
    });
    await newComment.save();
}


export default {getById, postComment}
