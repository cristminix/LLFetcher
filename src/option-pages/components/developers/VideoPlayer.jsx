import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { useEffect,useRef,useState } from 'react'
import { useLocation } from 'react-router-dom'
import CourseApi from '../../../global/course-api/CourseApi'
import PlaylistControl from './video-player/PlaylistControl'
import { niceScrollbarCls } from '../ux/cls'
const VideoPlayer=({store, config, options, onReady})=>{
    const location = useLocation()
    const qs= location.search
    const qp= new URLSearchParams(qs)
    const [slug,setSlug] = useState(qp.get('slug'))
    const [course,setCourse] = useState(null)
    const [sections,setSections] = useState(null)
    const [tocs,setTocs] = useState(null)
    const [streamLocations,setStreamLocations] = useState(null)
    const [transcripts,setTranscripts] = useState(null)
    const [playlistData,setPlaylistData] = useState(null)
    const [videoTitle,setVideoTitle] = useState("")
    const [courseApi,setCourseApi] = useState(null)
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    // responsive: true,
    fluid: true,
    // sources: [{
    //   src: '/path/to/video.mp4',
    //   type: 'video/mp4'
    // }]
  }

  useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js")

      videoElement.classList.add('vjs-big-play-centered')
      videoRef.current.appendChild(videoElement)

      const player = playerRef.current = videojs(videoElement, videoJsOptions, () => {
        videojs.log('player is ready')
        onReady && onReady(player)
      })

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef])
  
  const startVideoPlayer = f =>{

  }

  const loadPlaylist = f =>{

  }
  
  const generatePlaylist = async()=>{
    const courseApi = new CourseApi(store)
    const course = await courseApi.getCourseInfo(slug)
    const sections = await courseApi.getCourseSections(slug)
    const tocs = await courseApi.getCourseTocs(slug)
    setCourse(course)
    setSections(sections)
    setTocs(tocs)
    setCourseApi(courseApi)
    console.log(course,sections,tocs)

    const playlistData = {}

    for(const section of sections){
        playlistData[section.slug] = {
            title : section.title,
            path: section.id,
            hasChild:true,
            iconCls:'bi bi-bookmark',
            childItems: {}
        }

        for(const toc of tocs[section.slug]){
            playlistData[section.slug].childItems[toc.slug]={
                title : toc.title,
                path : toc.id,
                iconCls:'bi bi-play'
            }
        }
    }
    setPlaylistData(playlistData)
    
  }

  const loadPlayerData = async()=>{
    // await generatePlaylist()
    // loadPlaylist()
    // startVideoPlayer()
  }
  const loadCourseData = async()=>{
    await generatePlaylist()
  }
  useEffect(()=>{
    if(slug){
        loadCourseData()
    }
  },[slug])

  useEffect(()=>{
    if(course){
        // loadPlayerData()
    }
  },[course])
  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])
  const onSelectItem = async(sectionId,tocId) => {
    console.log(sectionId,tocId)
    let mustBreak = false
    let selectedSection = null
    let selectedToc = null
    for(const section of sections){
        for(const toc of tocs[section.slug]){
            if(section.id == sectionId && toc.id == tocId){
                selectedSection = section
                selectedToc = toc  
                mustBreak = true              
                break
            }
        }
        if(mustBreak){
            break
        }
    }

    setVideoTitle(selectedToc.title)
    const streamLocs = await courseApi.getStreamLocs(selectedToc)
    let selectedTranscript = null
    const transcripts = await courseApi.getTranscripts(selectedToc)
    if(transcripts){
        selectedTranscript = transcripts.id
    }
    if(streamLocs){

        const sloc = Array.isArray(streamLocs)?streamLocs[0]:streamLocs[360]
        console.log(sloc)
        const player = playerRef.current

        player.autoplay(true)
        player.src([{
              src: sloc.url,
              type: 'video/mp4'
            }])
            player.addRemoteTextTrack({src: selectedTranscript.url,language:"ID",default:true}, true)
    }
    
    console.log(streamLocs)
    console.log(selectedSection,selectedToc)
  }
  return (
    <div className="video-player py-4">
        <div className="player-container flex" data-vjs-player>
            <div ref={videoRef} className='w-full'>
                <h4 className="text-lg flex-end">{videoTitle}</h4>
            </div>
            <div className={`playlist-container  w-[275px] h-screen flex-none overflow-auto ${niceScrollbarCls}`}>
                {
                    playlistData? <PlaylistControl data={playlistData} onSelectItem={(a,b)=>onSelectItem(a,b)}/>:null
                }
                
            </div>
        </div>
    </div>
  )
}

export default VideoPlayer