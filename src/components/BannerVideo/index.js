import React from 'react'
import { BannerVideoContainer, BannerContactSubtitle, BannerContactTitle } from './styled'

const BannerContactVideo = ({ children, title, subtitle }) => {
  return (
    <BannerVideoContainer>
      <video loop="true" autoPlay="true" muted width="100%">
        {children}
      </video>
      <BannerContactTitle>{title}</BannerContactTitle>
      <BannerContactSubtitle>{subtitle}</BannerContactSubtitle>
    </BannerVideoContainer>
  )
}

export default BannerContactVideo
