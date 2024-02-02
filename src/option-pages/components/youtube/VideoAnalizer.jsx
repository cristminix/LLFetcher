// VideoAnalizer.js

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const VideoAnalizer = (config, store) => {
  const location = useLocation()

  const [videoId, setVideoId] = useState('')  

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const videoId = queryParams.get('v') 
    setVideoId(videoId)
  }, [location])

  return (
    <div>
      <p>Video ID {videoId}</p>
      
    </div>
  )
}

export default VideoAnalizer
