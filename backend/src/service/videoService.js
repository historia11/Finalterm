import videoRepository from "../repository/videoRepository.js";
const getAllVideo = async (video_id) => {
    const videos = await videoRepository.getAllVideo(video_id);
    return videos;
}

export default {getAllVideo}