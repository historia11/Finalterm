import faker from 'faker';
import mongoose from 'mongoose';
import Comment from '../models/commentModel';

async function seedData() {
    const uri = "mongodb://127.0.0.1:27017/gigih_db";
    const seed_count = 4;
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to db");

        let timeSeriesData = [];
        for (let i = 0; i < seed_count; i++) {
            const videoId = "videoId_from_seeder";
            const username = faker.name.findName();
            const comment = faker.lorem.words(3);

            timeSeriesData.push({ 
                videoId,
                username,
                comment
            });
        }

        await Comment.insertMany(timeSeriesData);
        mongoose.connection.close();
        console.log("Seed success");
    } catch (error) {
        console.log("Error", error);
    }
}

seedData();
