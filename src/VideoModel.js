import MediaModel from './MediaModel';

class VideoModel extends MediaModel{

    posterURL=''
    constructor(src, type, alt, widthPercent, maxWidth, posterURL) {
        super(src, type, alt, widthPercent, maxWidth)
        this.posterURL=posterURL;
    }
}

export default VideoModel;