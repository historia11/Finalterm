import videoRepository from "../repository/videoRepository.js";
const getAllVideo = async (videoId) => {
    const videos = await videoRepository.getAllVideo(videoId);
    return videos;
}

export default {getAllVideo}