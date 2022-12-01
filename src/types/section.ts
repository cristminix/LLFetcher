import Toc from './toc';

interface Section{
    title : string,
    slug : string,
    items : Array<Toc>
}

export default Section;