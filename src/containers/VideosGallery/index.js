import React from 'react'

import { FiCamera } from 'react-icons/fi'
import { PortIconContainer, PortLink } from '../Portfolio/styled'
import { GalleryContainer } from '../PhotosGallery/styled'
import { VideoDiv, VideoTitle } from './styled'
import bannerVideos from '../../assets/imgCovers/bannerCover_PicoDosMarinsNoiteLuaCheia.jpg'
import Banner from '../../components/Banner'
import { OverHiddenContainer } from '../Home/styled'
import bannerSmall from '../../assets/imgCovers/bannerSmall_PicoDosMarinsNoiteLuaCheia.jpg'

export default function VideosGallery() {
  return (
    <OverHiddenContainer>
      <Banner
        fontsizeTitleBanner="1.2em"
        fontweightTitleBanner="bold"
        imgBack={bannerVideos}
        imgBackSmall={bannerSmall}
      >
        VIDEOS
      </Banner>
      <PortIconContainer>
        <PortLink to="/galeriadefotos">
          <FiCamera />
          FOTOS
        </PortLink>
      </PortIconContainer>
      <GalleryContainer marginGalleryContainer="40px -95px 40px 125px">
        <VideoTitle>ISSO É BRASIL. Serras Gerais, TO\Brasil</VideoTitle>
        <VideoDiv>
          <iframe
            className="youtubeIframe"
            src="https://www.youtube-nocookie.com/embed/eb1hi6xq678?rel=0?autoplay=1"
            frameBorder="0"
            controls="0"
            title="ISTO É BRASIL. Serras Gerais\TO\Brasil"
            allow=" accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoDiv>
        <VideoTitle>MONTANHAS DO BRASIL. Demo Reel-2016\Brasil</VideoTitle>
        <VideoDiv>
          <iframe
            className="youtubeIframe"
            src="https://www.youtube-nocookie.com/embed/JiNEsZJlyOw?rel=0?autoplay=1"
            frameBorder="0"
            controls="0"
            title="MONTANHAS DO BRASIL. Demo Reel-2016\Brasil"
            allow=" accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoDiv>
        <VideoTitle>DEDO DE DEUS. Rio de Janeiro\Brasil</VideoTitle>
        <VideoDiv>
          <iframe
            className="youtubeIframe"
            src="https://www.youtube-nocookie.com/embed/weIOjIhSWsM?rel=0?autoplay=1"
            frameBorder="0"
            controls="0"
            title="DEDO DE DEUS. Rio de Janeiro\Brasil"
            allow=" accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoDiv>
        <VideoTitle>EQUILIBRIO. Brasil</VideoTitle>
        <VideoDiv>
          <iframe
            className="youtubeIframe"
            src="https://www.youtube-nocookie.com/embed/S5FJa5Gh0Vs?start=2?rel=0?autoplay=1"
            frameBorder="0"
            controls="0"
            title="EQUILIBRIO. Brasil"
            allow=" accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoDiv>
        <VideoTitle>MONTE RORAIMA. Venezuela</VideoTitle>
        <VideoDiv>
          <iframe
            className="youtubeIframe"
            src="https://www.youtube-nocookie.com/embed/W4cKp4QmYsA?start=2?rel=0?autoplay=1"
            frameBorder="0"
            controls="0"
            title="EQUILIBRIO. Brasil"
            allow=" accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoDiv>
      </GalleryContainer>
    </OverHiddenContainer>
  )
}
