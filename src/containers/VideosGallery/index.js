import React from 'react'

import { FiCamera } from 'react-icons/fi'
import { PortIconContainer, PortLink } from '../Portfolio/styled'
import { GalleryContainer } from '../PhotosGallery/styled'
import { NarrowVideo, WideVideo } from './styled'
import video1 from '../../assets/videoGallery/aerielDemoReel2016.mp4'
import video2 from '../../assets/videoGallery/dedoDeDeus_SerraDosOrgaos.mp4'
import video3 from '../../assets/videoGallery/equilibrio_SamuelOscar.mp4'
import video4 from '../../assets/videoGallery/monteRoraima.mp4'
import videoGerais from '../../assets/videoGallery/princial_SerraGeraisTO.mp4'
import bannerVideos from '../../assets/imgCovers/bannerCover_PicoDosMarinsNoiteLuaCheia.jpg'
import Banner from '../../components/Banner'
import { OverHiddenContainer } from '../Home/styled'
import bannerSmall from '../../assets/imgCovers/bannerSmall_PicoDosMarinsNoiteLuaCheia.jpg'
import {MidiaResume, MidiaTextContainer, MidiaTitle} from "../../components/MidiasAndComents/styled";


export default function VideosGallery() {
  return (
    <OverHiddenContainer>
      <Banner fontsizeTitleBanner="1.2em" fontweightTitleBanner="bold" imgBack={bannerVideos} imgBackSmall={bannerSmall}>
        VIDEOS
      </Banner>
      <PortIconContainer>
        <PortLink to="/galeriadefotos">
          <FiCamera />
          FOTOS
        </PortLink>
      </PortIconContainer>
      <GalleryContainer marginGalleryContainer="40px -95px 40px 125px">
        <MidiaTitle paddingMidiaTitle={'35px 0 5px 7px'} fontsizeMidiaTitleSmall={'0.5em'} letterspacingMidiaTitleSmall={'2px'}>ISSO É BRASIL. Serras Gerais\TO\Brasil</MidiaTitle>
        <WideVideo loop="true" autoPlay="true"  controls width="100%">
           <source src={videoGerais} type="video/mp4" />
           Your browser does not support the index tag.</WideVideo>
        <MidiaTitle paddingMidiaTitle={'35px 0 5px 7px'} fontsizeMidiaTitleSmall={'0.5em'} letterspacingMidiaTitleSmall={'2px'}>MONTANHAS DO BRASIL. Demo Reel\2016\Brasil</MidiaTitle>
        <WideVideo loop="false" autoPlay="false"  controls width="100%">
          <source src={video1} type="video/mp4" />
          Your browser does not support the index tag.
        </WideVideo>
        <MidiaTitle paddingMidiaTitle={'35px 0 5px 7px'} fontsizeMidiaTitleSmall={'0.5em'} letterspacingMidiaTitleSmall={'2px'}>DEDO DE DEUS. Rio de Janeiro\Brasil</MidiaTitle>
        <NarrowVideo loop="false" autoPlay="false"  controls width="100%">
          <source src={video2} type="video/mp4" />
          Your browser does not support the index tag.
        </NarrowVideo>
        <MidiaTitle paddingMidiaTitle={'35px 0 5px 7px'} fontsizeMidiaTitleSmall={'0.5em'} letterspacingMidiaTitleSmall={'2px'}>EQUILIBRIO. Brasil</MidiaTitle>
        <NarrowVideo loop="false" autoPlay="false"  controls width="100%">
          <source src={video3} type="video/mp4" />
          Your browser does not support the index tag.
        </NarrowVideo>
        <MidiaTitle paddingMidiaTitle={'35px 0 5px 7px'} fontsizeMidiaTitleSmall={'0.5em'} letterspacingMidiaTitleSmall={'2px'}>MONTE RORAIMA. Venezuela</MidiaTitle>
        <NarrowVideo loop="false" autoPlay="false"  controls width="100%">
          <source src={video4} type="video/mp4" />
          Your browser does not support the index tag.
        </NarrowVideo>
      </GalleryContainer>
    </OverHiddenContainer>
  )
}
