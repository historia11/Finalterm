import Product from "../models/productModel.js";
const getById = async (videoId) => {
    try {
        const product = await Product.find({
            videoId : videoId
        });
        return product;
    } catch (error) {
        console.log(error);
    }
}

export default {getById}
