import {
    getDsRecordsByType,findProp
} from "./fn"

import {
    slugify 
} from "../../fn"
import { courseUrlFromSlug, slugToTitle } from "../course_fn"
import { isEqual } from "underscore"

class CourseApiLegacy {
    // store m3Rec
    ds=null
    course=null
    sections=null
    tocs=null
    authors=null
    slug=null
    exerciseFiles=null
    thumbnails=null
    store=null
    constructor(ds, slug, store){
        this.ds = ds
        this.slug = slug
        this.store = store
    }
    
    async getCourse(refresh = false){
        const {store} = this
        const mCourse = store.get("Course")
		
		// const mStreamLoc = store.get("StreamLocation")
		const mThumbnail = store.get("Thumbnail")
		const mExerciseFile = store.get("ExerciseFile")
        
        if(!this.ds){
            return null
        }
        if(!refresh){
            if(this.course){
                return this.course
            }
            this.course = mCourse.getBySlug(this.slug)
            if(this.course){
                this.exerciseFiles = mExerciseFile.getListByCourseId(this.course.id)
                this.thumbnails =mThumbnail.getListByCourseIdAsObject(this.course.id)

                return this.course
            }
            
        }
        

       
        const rows = getDsRecordsByType('com.linkedin.learning.api.deco.content.Course',this.ds)
        if(rows.length > 0){
            const filteredRows = rows.filter(row=>{
                if(row){
                    if(row.slug){
                        return row.slug == this.slug
                    }
                }  
            })
            if(filteredRows.length > 0){
                const row = filteredRows.pop()
                console.log(row)
                const {
                    title,
                    duration,
                    sourceCodeRepository,
                    subtitle, 
                    slug,
                    entityUrn,
                    githubCodespace,
                    exerciseFiles
                } = row
                

                const course = {
                    title,
                    duration : duration.duration?duration.duration:0,
                    sourceCodeRepository,
                    subtitle, 
                    slug,
                    description:'',
                    urn:entityUrn,
                    githubCodespace 
                }
                if(row.description){
                    course.description = row.description.text
                }
                if(row.descriptionV2){
                    course.description = row.descriptionV2.text
                }
                this.course = await mCourse.create(title,slug,course.duration,sourceCodeRepository,course.description,course.urn)
                // fetch exerciseFiles
                if(Array.isArray(exerciseFiles)){
                    exerciseFiles.map(async(item)=>{
                        const {name, sizeInBytes, url} = item
                        const rec = await mExerciseFile.create(name,url,sizeInBytes,this.course.id)
                        if(!Array.isArray(this.exerciseFiles)){
                            this.exerciseFiles = []
                        }
                        this.exerciseFiles.push(rec)
                    })
                }
                

                // fetch thumbnails
                if(row.primaryThumbnail){
                    const rootUrl = findProp('rootUrl', row.primaryThumbnail,1)
                    const artifacts = findProp('artifacts', row.primaryThumbnail,1)
                    
                    if(Array.isArray(artifacts)){
                        for(const artifact of artifacts){
                            const size = `${artifact.width}x${artifact.height}`
                            const url = `${rootUrl}${artifact.fileIdentifyingUrlPathSegment}`
                            const {expiresAt} = artifact

                            if(!this.thumbnails){
                                this.thumbnails = {}
                            }
                            const thumbnail = await mThumbnail.create(this.course.id, size, url, expiresAt)
                            this.thumbnails[size] = thumbnail
                        }
                    }
                }else if(row.primaryThumbnailV2){
                    const rootUrl = findProp('rootUrl', row.primaryThumbnailV2,1)
                    const artifacts = findProp('artifacts', row.primaryThumbnailV2,1)
                    
                    if(Array.isArray(artifacts)){
                        for(const artifact of artifacts){
                            const size = `${artifact.width}x${artifact.height}`
                            const url = `${rootUrl}${artifact.fileIdentifyingUrlPathSegment}`
                            const {expiresAt} = artifact

                            if(!this.thumbnails){
                                this.thumbnails = {}
                            }
                            const thumbnail = await mThumbnail.create(this.course.id, size, url, expiresAt)
                            this.thumbnails[size] = thumbnail
                        }
                    }
                }
            }
        }
        return this.course
    }

    async getSections(refresh=false){
        
		const mSection = this.store.get("Section")
        if(!this.course){
            this.getCourse()
        }
        if(!this.course){
            return null
        }
        if(!refresh){
            if(this.sections){
                return this.sections
            }
            this.sections = mSection.getListByCourseId(this.course.id)
            if(this.sections.length > 0){
                return this.sections
            }
        }

        const {urn} = this.course

        let sectionsTmp = []

        let lac_key = urn
        let lac = findProp(lac_key, this.ds)

        try { 
            sectionsTmp = lac.__data.contents
        } catch(e){
            return null
        }

        this.sections = null
        for(const sectionTmp of sectionsTmp){
            
            let sectionUrn = sectionTmp['*section']
            

            if(this.ds[sectionUrn]){
                if(this.ds[sectionUrn].__data){
                    const sectionData = this.ds[sectionUrn].__data
                    const itemStars = sectionData['*items']//.filter(item=>!item.search('learningApiAssessment'))

                    const section = await mSection.create(sectionData.title, slugify(sectionData.title), this.course.id,itemStars)
                    if(!Array.isArray(this.sections)){
                        this.sections = []
                    }
                    this.sections.push(section)

                }else{
                    console.error(`Unable to find section data by urn: ${sectionUrn}`)

                }
            }else{
                console.error(`Unable to find section by urn: ${sectionUrn}`)
            }   
        }
        return this.sections

    }

    async getTocs(refresh=false){
		const mToc = this.store.get("Toc")
        if(!this.sections){
            this.getSections()
        }
        if(!refresh){
            if(this.tocs){
                if(this.tocs.length > 0)
                    return this.tocs
            }
            
        }
        this.tocs = null
        if(this.sections){
            
            for(const section of this.sections){
                let tocsFoundInDb = false
                if(!refresh){
                    const items = mToc.getListBySectionId(section.id)
                    if(items.length > 0){
                        tocsFoundInDb = true
                        if(!this.tocs){
                            this.tocs = {}
                        }
                        if(!Array.isArray(this.tocs[section.slug])){
                            this.tocs[section.slug] = []
                        }
                        this.tocs[section.slug]=items
                    }
                    
                }
                if(!tocsFoundInDb){
                    for(const itemStar of section.itemStars){
                        let videoDataFound = false
                        let videoData = null 
                        let tocData = null

                        let tocDataFound = false

                        if(this.ds[itemStar]){
                            if(this.ds[itemStar].__data){
                                if(this.ds[itemStar].__data.content){
                                    if(this.ds[itemStar].__data.content.video){
                                        videoData = this.ds[itemStar].__data.content.video
                                        videoDataFound=1
                                    }
                                }    
                            }    
                        }
                        if(videoDataFound){
                            if(this.ds[videoData]){
                                if(this.ds[videoData].__data){
                                    tocDataFound = true
                                    tocData = this.ds[videoData].__data
                                    tocDataFound=1
                                }
                            }
                        }else{
                            console.error(`unable to find video data itemStar:${itemStar}`)
                        }

                        if(tocDataFound){
                            const {slug, title} = tocData
                            const duration = tocData.duration ? tocData.duration.duration : 0
                            let vStatusUrn = tocData['*lyndaVideoViewingStatus']
                            if(!vStatusUrn){
                                vStatusUrn = tocData['*interactionstatusv2']
                            }
                            const toc = await mToc.create(title, slug, courseUrlFromSlug(`${this.course.slug}/${slug}`), duration, null, null, section.id,itemStar,vStatusUrn)
                          
                            if(!this.tocs){
                                this.tocs = {}
                            }
                            if(!Array.isArray(this.tocs[section.slug])){
                                this.tocs[section.slug] = []
                            }
                            this.tocs[section.slug].push(toc)
                        }else{
                            const errorKey = videoData ? `videoData:${videoData}` : `itemStar:${itemStar}` 
                            console.error(`unable to find toc data ${errorKey}`)
                        }
                    }
                }
                
            }
            
        }
        return this.tocs
    }

    async getAuthors(refresh=false){
        const mAuthor = this.store.get("Author")
        const mCourse = this.store.get("Course")
        if(!this.course){
            this.getCourse()
        }
        
        
        if(!this.course){
            return null
        }
        if(!refresh){
            this.authors = mAuthor.getListByCourse(this.course)
            if(this.authors.length > 0){
                return this.authors
            }
        }
        this.authors = null
        const results = getDsRecordsByType('com.linkedin.learning.api.deco.content.Author',this.ds)
  
        if(results){
            for(const authorData of results){
                let {slug, urn} = authorData
                const author = {
                    name : slugToTitle(slug),
                    slug,
                    urn,
                    biography:null,
                    shortBiography:null
                }
                if(authorData.biography){
                    author.biography = authorData.biography.text
                }
                if(authorData.shortBiography){
                    author.shortBiography = authorData.shortBiography.text
                }
                if(authorData.biographyV2){
                    author.biography = authorData.biographyV2.text
                }
                if(authorData.shortBiographyV2){
                    author.shortBiography = authorData.shortBiographyV2.text
                }
                if(!Array.isArray(this.authors)){
                    this.authors=[]
                }
                const rec = await mAuthor.create(author.name,slug,author.biography,author.shortBiography,this.course.id)
                this.course = await mCourse.addAuthorId(this.course.id, rec.id)
                this.authors.push(rec)
            }
        }
       
        return this.authors
    }

    getExerciseFiles(){
        if(!this.course){
            this.getCourse()
        }
        return this.exerciseFiles
    }
    getThumbnails(){
        if(!this.course){
            this.getCourse()
        }
        return this.thumbnails
    }
}

export default CourseApiLegacy