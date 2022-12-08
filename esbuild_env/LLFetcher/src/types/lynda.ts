interface Author{
    biography : string,
    shortBiography : string,
    slug : string,
    urn : string
}
interface Course{
    title : string,
    slug : string,
    duration : number,
    sourceCodeRepository: string,
    subtitle : string,
    description : string,
    urn : string,
    authors : Array<Author>,
    sections : Array<Section>
};
interface Section{
    ID(ID: any): unknown;
    title : string,
    slug : string,
    items : Array<Toc>
}
interface Toc{
    title : string,
    slug : string,
    duration : number,
    url : string,
    captionUrl : string,
    captionFmt : string,
    streamLocations : StreamLocation[]
}
interface DataCodes {
    course : Course,
    sections : Section[]
}
interface StreamLocation{
    fmt : string,
    url : string
}
interface ExerciseFile{
    name : string,
    url : string,
    sizeInBytes:number
}
interface CourseInfo{
    bprs : Object,
    course : Course,
    sections : Section[]
}

export {Author,Course,Section,Toc,StreamLocation,ExerciseFile,CourseInfo,DataCodes}