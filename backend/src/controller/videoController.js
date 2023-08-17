import videoService from "../service/videoService.js";

const getAllVideo = async (req, res) => {
    const videos = await videoService.getAllVideo();
    res.status(200).json({
        message: "Success",
        status: 200,
        data: videos
    })

}

export default {getAllVideo}

