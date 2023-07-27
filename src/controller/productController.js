import productService from "../service/productService.js";

const getProductById = async (req, res) => {
    const videos = await productService.getById(req.param.id)
    res.status(200).json({
        message: "Success",
        status: 200,
        data: videos
    })

}

export default {getProductById}

