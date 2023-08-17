import Videos from "../models/videoModel.js";
const getAllVideo = async() => {
    try {
        const videos = await Videos.find();
        return videos;
    } catch (error) {
        console.log(error);
    }
}

export default {getAllVideo}