import productService from "../service/productService.js";

const getProductById = async (req, res) => {
    console.log(req.params.id);
    const videos = await productService.getById(req.params.id)
    res.status(200).json({
        message: "Success",
        status: 200,
        data: videos
    })

}

export default {getProductById}

