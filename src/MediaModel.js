class MediaModel {
    src = ''; type = ''; alt = ''; widthPercent='90%'; maxWidth='650px';
    constructor(src, type, alt, widthPercent, maxWidth) {
        this.src = src; this.type = type; this.alt = alt; this.widthPercent=widthPercent;
        this.maxWidth=maxWidth;
    }
}
export default MediaModel;