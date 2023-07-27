import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Produk: [
        {
            nama_produk: {
                type: String,
                required: true
            },
            harga_produk: {
                type: Number,
                required: true
            },
            Thumbnail_produk: {
                type: String,
                required: true
            },
            link_produk: {
                type: String,
                required: true
            },

            videoId: {
                type: String,
                required: true
            }
        }
    ]


})
const Product = mongoose.model("product", productSchema)

export default Product;
