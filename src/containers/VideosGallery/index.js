import React from 'react'

import { FiCamera } from 'react-icons/fi'
import { PortIconContainer, PortLink } from '../Portfolio/styled'
import { GalleryContainer } from '../PhotosGallery/styled'
import { NarrowVideo, WideVideo } from './styled'
import video1 from '../../assets/videoGallery/aerielDemoReel2016.mp4'
import video2 from '../../assets/videoGallery/dedoDeDeus_SerraDosOrgaos.mp4'
import video3 from '../../assets/videoGallery/equilibrio_SamuelOscar.mp4'
import video4 from '../../assets/videoGallery/monteRoraima.mp4'
import bannerVideos from '../../assets/imgCovers/picoDosMarinsNoiteLuaCheia.jpg'
import Banner from '../../components/Banner'
import { OverHiddenContainer } from '../Home/styled'

export default function VideosGallery() {
  return (
    <OverHiddenContainer>
      <Banner imgBack={bannerVideos} subtitle="@dronedamontanha">
        VIDEOS
      </Banner>
      <PortIconContainer>
        <PortLink to="/galeriadefotos">
          <FiCamera />
          Fotos
        </PortLink>
      </PortIconContainer>
      <GalleryContainer marginGalleryContainer="40px -95px 40px 125px">
        <WideVideo loop="true" autoPlay="true" muted controls width="100%">
          <source src={video1} type="video/mp4" />
          Your browser does not support the index tag.
        </WideVideo>
        <NarrowVideo loop="true" autoPlay="true" muted controls width="100%">
          <source src={video2} type="video/mp4" />
          Your browser does not support the index tag.
        </NarrowVideo>
        <NarrowVideo loop="true" autoPlay="true" muted controls width="100%">
          <source src={video3} type="video/mp4" />
          Your browser does not support the index tag.
        </NarrowVideo>
        <NarrowVideo loop="true" autoPlay="true" muted controls width="100%">
          <source src={video4} type="video/mp4" />
          Your browser does not support the index tag.
        </NarrowVideo>
      </GalleryContainer>
    </OverHiddenContainer>
  )
}
