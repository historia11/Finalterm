import commentRepository from "../repository/commentRepository.js";


const getById = async (videoId) => {
    const id = await commentRepository.getById(videoId);
    return id;
}


const postComment = async (data) => {
    commentRepository.postComment(data)
}
export default {getById, postComment}