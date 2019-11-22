import MediaModel from './MediaModel';

class VideoModel extends MediaModel{

    posterURL=''
    constructor(src, type, alt, widthPercent, posterURL) {
        super(src, type, alt, widthPercent)
        this.posterURL=posterURL;
    }
}

export default VideoModel;