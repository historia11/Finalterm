import Product from "../models/productModel.js";
const getById = async (video_id) => {
    try {
        console.log(video_id);
        const product = await Product.find({
           video_id : video_id
        });
        console.log(product);
        return product;
    } catch (error) {
        console.log(error);
    }
}

export default {getById}
