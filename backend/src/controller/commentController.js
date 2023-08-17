import commentService from "../service/commentService.js"
const getCommentById = async (req, res) => {
    const videos = await commentService.getById(req.params.id)
    res.status(200).json({message: "Success", status: 200, data: videos})
}


const postComment = async (req, res) => {
   let data = req.body
   commentService.postComment(data)
   res.status(200).json({message: "Success", status: 200, data: data})
}


export default {getCommentById, postComment}
