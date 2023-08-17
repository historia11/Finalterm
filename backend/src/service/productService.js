import productRepository from "../repository/productRepository.js"

const getById = async (video_id) => {
    const id = await productRepository.getById(video_id);
    console.log(id);
    return id;
}

export default {getById}