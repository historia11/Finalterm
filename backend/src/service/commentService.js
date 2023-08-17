import commentRepository from "../repository/commentRepository.js";


const getById = async (video_id) => {
    const id = await commentRepository.getById(video_id);
    return id;
}


const postComment = async (data) => {
    commentRepository.postComment(data)
}
export default {getById, postComment}