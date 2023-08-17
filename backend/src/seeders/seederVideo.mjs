import faker from 'faker';
import mongoose from 'mongoose';
import Product from '../models/productModel';

async function seedData() { 
    const uri = "mongodb://127.0.0.1:27017/gigih_db";
    const seed_count = 10;
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to db");

        let timeSeriesData = [];
        // create 5000 fake data
        for (let i = 0; i < seed_count; i++) {
            let dataProduct = [];
            for (let j = 0; j < 8; j++) {
                const product_name = faker.commerce.productName();
                const price_product = faker.commerce.price({min: 10000, max: 200000});
                const thumbnail_product = faker.image.imageUrl();
                const link_product = faker.image.imageUrl();

                dataProduct.push({product_name, price_product, thumbnail_product, link_product});
            }
            const video_id = faker.random.uuid();
            const thumbnail = faker.image.imageUrl();
            const shop_name = faker.company.companyName();
            const video_title = faker.commerce.productName();

            timeSeriesData.push({
                video_id,
                thumbnail,
                shop_name,
                video_title,
                product: dataProduct
            });
        }

        await Product.insertMany(timeSeriesData);
        mongoose.connection.close();
        console.log("Seed success");
    } catch (error) {
        console.log("Error", error);
    }
}

seedData();
