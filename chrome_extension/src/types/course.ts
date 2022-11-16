import Author from './Author';
import Section from './Section';

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

export default Course;