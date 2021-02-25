import React from 'react'
import videoMantiqueiraFull from '../../assets/videoHome/MantiqueiraFull.mp4'
import { VideoContainer } from './styled'

// import { VideoIframe } from './styled'

const Video = () => {
  return (
    <VideoContainer loop="true" autoPlay="true" controls width="100%">
      <source src={videoMantiqueiraFull} type="video/mp4" />
      Your browser does not support the index tag.
    </VideoContainer>
  )
}
export default Video
