import React from 'react'
import { BannerVideoContainer, BannerContactSubtitle, BannerContactTitle, ContactVideo } from './styled'

const BannerContactVideo = ({ children, title, subtitle }) => {
  return (
    <BannerVideoContainer>
      <ContactVideo loop="true" autoPlay="true" muted width="100%">
        {children}
      </ContactVideo>
      <BannerContactTitle>{title}</BannerContactTitle>
      <BannerContactSubtitle>{subtitle}</BannerContactSubtitle>
    </BannerVideoContainer>
  )
}

export default BannerContactVideo
