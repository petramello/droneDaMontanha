import React from 'react'

import { FiCamera } from 'react-icons/fi'
import { GiFilmProjector } from 'react-icons/gi'
import { VscBook } from 'react-icons/vsc'
import { GrServices } from 'react-icons/gr'
import droneIcon from '../../assets/imgAbout/droneIcon.png'
import longProfileImg from '../../assets/imgAbout/longProfileSamuelOscar.jpg'
import backgroundGreenBrush from '../../assets/imgAbout/greenBrushBackground.jpg'

import {
  LongProfile,
  ImgLongProfile,
  ServicesContainer,
  ServiceTopic,
  ServiceIcon,
  ServiceContainer,
  ServiceLinkContainer,
  ServiceNavLink,
  IndividualServiceIcon,
  ServicesTextContainer,
  ServicesTitle,
  ServicesText,
  DroneIcon,
  BackLongProfile,
  ResumeLongProfile,
  LongSignProfile,
  ServicesTextLinkContainer,
  ServicesTitleLink,
  AboutContainer
} from './styled'

const About = () => {
  return (
    <AboutContainer>
      <LongProfile>
        <div>
          <ImgLongProfile src={longProfileImg} alt="Foto do filmmaker Samual Oscar" />
          <BackLongProfile
            src={backgroundGreenBrush}
            alt="Background de pintura em guache verde extraída do site https://www.onlygfx.com/wp-content/uploads/2018/02/green-watercolor-background-2.jpg"
          />
        </div>
        <ResumeLongProfile>
          Meu nome é Samuel Oscar, montanhista, escalador, mais conhecido pelos filmes e fotos do Drone da Montanha.
          Vivo ao redor da Serra da Mantiqueira percorrendo os principais trekkings e transportando equipamentos em
          expedições e locais extremos a procura de belas imagens. Um trabalho sendo aprimorado decorrente de muitas
          aventuras em esporte de auto rendimento. Com o desfecho do meu trabalho, já tive inúmeras oportunidades que
          engloba grandes emissores de televisão (Globo Rural, Esporte Espetacular, Fantástico, Tv Vanguarda), revistas
          consagradas (Go Outside, National Geograich), convites internacional (BBC/AirVuz/Mastercard), apoio de marcas
          consagradas no meio outdoor (Deuter\SpotBrasil\BotasVento), e convites para palestras no SESC, INPE e eventos
          Outdoor, mostrando minhas experiencias na produção de vídeo. Tive alguns destaques e prêmios em páginas de
          marcas que utilizo como a DJI e Gopro. Recebi também vários convites de projetos de renomes no audiovisual,
          que me auxiliaram bastante nesta fase de aprendizado infinita que o audiovisual proporciona.
        </ResumeLongProfile>
        <LongSignProfile>SAMUEL OSCAR</LongSignProfile>
      </LongProfile>

      <ServicesContainer>
        <ServiceTopic>
          <ServiceIcon>
            <GrServices />
          </ServiceIcon>
          <ServicesTitle>SERVIÇOS</ServicesTitle>
        </ServiceTopic>

        <ServiceLinkContainer>
          <ServiceNavLink to="/galeriadefotos">
            <IndividualServiceIcon>
              <FiCamera />
            </IndividualServiceIcon>
            <ServicesTextLinkContainer>
              <ServicesTitleLink>FOTOGRAFIAS</ServicesTitleLink>
              <ServicesText>
                Colocar meu coração e alma em cada fotografia que crio traz originalidade e emoções que vão espalhar uma
                mensagem de forma atraente.
              </ServicesText>
              <ServicesText>Câmera: Sony A6500 / Sony A7III / GoPro Black4 / Black7</ServicesText>
              <ServicesText>Estabilizador: Zhiyun Crane 2Plus / Zhiyun Weebill S</ServicesText>
            </ServicesTextLinkContainer>
          </ServiceNavLink>
        </ServiceLinkContainer>

        <ServiceLinkContainer>
          <ServiceNavLink to="/galeriadevideos">
            <IndividualServiceIcon>
              <DroneIcon
                src={droneIcon}
                alt="Drone vetorial preto e branco disponível no site pixabay da openclipart-vectors: https://pixabay.com/vectors/copter-drone-float-hover-quad-2025680/"
              />
            </IndividualServiceIcon>
            <ServicesTextLinkContainer>
              <ServicesTitleLink>VIDEOS</ServicesTitleLink>

              <ServicesText>
                Minha profunda paixão por imagens aéreas me trouxe para a indústria de viagens e também para causas
                ambientais, mas como um cineasta versátil, estou criando filmes muito além do que apenas imagens aéreas.
              </ServicesText>
              <ServicesText>Drone: Phantom 4Pro / Mavic 2 Pro</ServicesText>
            </ServicesTextLinkContainer>
          </ServiceNavLink>
        </ServiceLinkContainer>

        <ServiceContainer>
          <IndividualServiceIcon>
            <GiFilmProjector />
          </IndividualServiceIcon>
          <ServicesTextContainer>
            <ServicesTitle>FILMAGEM & ENTREVISTA</ServicesTitle>
            <ServicesText>
              Você tem uma mensagem para contar, uma ideia para compartilhar ou uma visão para promover. Eu tenho a
              capacidade de dar vida à sua história e fazer valer a pena assisti-la.
            </ServicesText>
          </ServicesTextContainer>
        </ServiceContainer>
        <ServiceContainer>
          <IndividualServiceIcon>
            <VscBook />
          </IndividualServiceIcon>
          <ServicesTextContainer>
            <ServicesTitle>WORKSHOP & CRIADOR DE CONTEÚDO</ServicesTitle>
            <ServicesText>
              Workshop - em processo de elaboração - para produção de filmes. Nestas produções, a mensagem é passada
              tanto por meio das imagens quanto pelo conteúdo bem elaborado, criativo e apropriado para a situação.
            </ServicesText>
          </ServicesTextContainer>
        </ServiceContainer>
      </ServicesContainer>
    </AboutContainer>
  )
}
export default About
