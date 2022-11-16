import Toc from './Toc';

interface Section{
    title : string,
    slug : string,
    items : Array<Toc>
}

export default Section;