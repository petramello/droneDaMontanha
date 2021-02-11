import React from 'react'
import { BannerContainer, BannerSubtitle, BannerTitle } from './styled'

const Banner = ({
  imgBack,
  imgBackSmall,
  children,
  subtitle,
  bannerColor,
  bannerSubtitleColor,
  fontTitleBanner,
  fontweightTitleBanner,
  fontsizeTitleBanner
}) => {
  return (
    <BannerContainer imgBackSmall={imgBackSmall} imgBack={imgBack} bannerColor={bannerColor}>
      <BannerTitle
        fontTitleBanner={fontTitleBanner}
        fontweightTitleBanner={fontweightTitleBanner}
        fontsizeTitleBanner={fontsizeTitleBanner}
      >
        {children}
      </BannerTitle>
      <BannerSubtitle bannerSubtitleColor={bannerSubtitleColor}>{subtitle}</BannerSubtitle>
    </BannerContainer>
  )
}

export default Banner
