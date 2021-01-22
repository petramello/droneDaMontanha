import React from 'react'
import { BannerContainer, BannerSubtitle, BannerTitle } from './styled'

const Banner = ({ imgBack, children, subtitle }) => {
  return (
    <BannerContainer imgBack={imgBack}>
      <BannerTitle>{children}</BannerTitle>
      <BannerSubtitle>{subtitle}</BannerSubtitle>
    </BannerContainer>
  )
}

export default Banner
