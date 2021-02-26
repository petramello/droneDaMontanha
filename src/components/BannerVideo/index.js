import React from 'react'
import { BannerVideoContainer, BannerContactSubtitle, BannerContactTitle, ContactVideoIframe } from './styled'

const BannerContactVideo = ({ children, title, subtitle }) => {
  return (
    <BannerVideoContainer>
      {/* <ContactVideo loop="true" autoPlay="true" muted width="100%"> */}
      {/*  {children} */}
      {/* </ContactVideo> */}
      <ContactVideoIframe
        src="https://player.vimeo.com/video/515849317?muted=1&autoplay=1&loop=1&background=1&autopause=0"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
      />
      <BannerContactTitle>{title}</BannerContactTitle>
      <BannerContactSubtitle>{subtitle}</BannerContactSubtitle>
    </BannerVideoContainer>
  )
}

export default BannerContactVideo
