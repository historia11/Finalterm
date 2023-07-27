import productRepository from "../repository/productRepository.js"

const getById = async (videoId) => {
    const id = await productRepository.getById(videoId);
    return id;
}

export default {getById}