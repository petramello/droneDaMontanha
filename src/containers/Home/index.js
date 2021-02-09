import React from 'react'

import Video from '../../components/Video'
import HomeBanner from '../../components/HomeBanner'
import shortProfileImg from '../../assets/imgHome/chapeuSamu.jpg'
import {
  Container,
  HomeSubtitle,
  HomeTitle,
  HomeTitleContainer,
  ImgProfile,
  InstaFrame,
  InstaSubtitle,
  InstaTitle,
  OverHiddenContainer,
  ResumeProfile,
  ShortProfile,
  SignProfile
} from './styled'

import './Home.css'
import BoxCard from '../../components/BoxCard'

const Home = () => {
  return (
    <OverHiddenContainer>
      <header id="header-id">
        <ul className="header-slideshow">
          <li>
            <span>Image 01</span>
          </li>
          <li>
            <span>Image 02</span>
          </li>
          <li>
            <span>Image 03</span>
          </li>
        </ul>
        <HomeTitleContainer>
          <BoxCard buttonColor="black" link="/portfolio">
            PORTFÓLIO
          </BoxCard>
          <HomeTitle>FOTÓGRAFO & FILMMAKER</HomeTitle>
          <HomeSubtitle>DRONE DA MONTANHA</HomeSubtitle>
        </HomeTitleContainer>
      </header>

      <Container>
        <Video />
      </Container>

      <Container>
        <HomeBanner />
      </Container>

      <>
        <InstaSubtitle>@dronedamontanha</InstaSubtitle>
        <InstaTitle>INSTAGRAM</InstaTitle>
        <Container>
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <InstaFrame
            src="https://www.juicer.io/api/feeds/drone_da_montanha/iframe?per=8"
            data-truncate="400"
            data-gutter="10"
          />
        </Container>
      </>

      <ShortProfile>
        <ImgProfile src={shortProfileImg} alt="Foto do Filmmeker Samual Oscar" />
        <ResumeProfile>
          Meu nome é Samuel Oscar, fotografo & filmmaker, montanhista, escalador e criador de conteúdo, mais conhecido
          pelos filmes e fotos do Drone da Montanha. Vivo ao redor da Serra da Mantiqueira percorrendo os principais
          trekkings e transportando equipamentos em expedições e locais extremos a procura de belas imagens.
        </ResumeProfile>
        <SignProfile>SAMUEL OSCAR</SignProfile>
      </ShortProfile>
    </OverHiddenContainer>
  )
}
export default Home
