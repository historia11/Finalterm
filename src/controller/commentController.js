import commentService from "../service/commentService.js"
const getCommentById = async (req, res) => {
    const videos = await commentService.getById(req.param.id)
    res.status(200).json({message: "Success", status: 200, data: videos})
}


const postComment = async (req, res) => {
   let data = req.body
   commentService.postComment(data)
}


export default {getCommentById, postComment}
