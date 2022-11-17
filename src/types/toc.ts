import StreamLocation from './StreamLocation';

interface Toc{
    title : string,
    slug : string,
    duration : number,
    url : string,
    captionUrl : string,
    captionFmt : string,
    streamLocations : StreamLocation[]
}

export default Toc;