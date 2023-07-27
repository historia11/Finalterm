import express from "express";
import videoController from "../controller/videoController.js";
import productController from "../controller/productController.js";
import commentController from "../controller/commentController.js";



const router = express.Router();

router.get("/videos", videoController.getAllVideo);
router.get("/videos/:id/products", productController.getProductById)
router.get("/videos/:id/comment", commentController.getCommentById)
router.post("/videos/:id/comment/post", commentController.postComment)

export {router}