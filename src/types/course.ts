import Author from './author';
import Section from './section';

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