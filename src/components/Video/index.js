import React from 'react'

import { VideoIframe } from './styled'

const Video = () => {
  return (
    <VideoIframe
      src="http://player.vimeo.com/video/515850487?autoplay=1&loop=1&autopause=0&muted=1"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    />
  )
}
export default Video
