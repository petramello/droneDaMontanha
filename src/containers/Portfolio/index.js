import React, { useState } from 'react'

import { GiFilmProjector } from 'react-icons/gi'
import { FiCamera } from 'react-icons/fi'
import MidiasAndComments from '../../components/MidiasAndComents'

import pedraDaMina from '../../assets/imgPortfolio/PicoDaPedraDaMina_SerraDaMantiqueira_1920.jpg'
// import jalapao from '../../assets/videoPortfolio/EssenciaDoBrasil_Jalapao.mp4'
import picoDoMarinzinho from '../../assets/imgPortfolio/PicoDoMarinzinho_SerraDaMantiqueira_1920.jpg'
// import reencontroMontanha from '../../assets/videoPortfolio/Reecontro - Montanha.mp4'
import serraFina from '../../assets/imgPortfolio/TravessiaSerraFina_Brasil_1920.jpg'
// import ondeTudoFazSentido from '../../assets/videoPortfolio/Montanha - Onde Tudo faz Sentido.mp4'
import { PortContainer, PortIconContainer, PortLink } from './styled'
import Banner from '../../components/Banner'
import { OverHiddenContainer } from '../Home/styled'

const midias = [
  {
    portCover: serraFina,
    portTitle: 'Travessia da Serra Fina - Serra da Mantiqueira. SP,MG,RJ - Brasil',
    portCategory: 'photo',
    portPath: '/photos',
    portId: 'p2',
    portResume:
      'De tudo, absolutamente tudo, o que já fiz na minha vida, olhar para Serra Fina me encanta profundamente.\n' +
      'Um quintal, um abrigo que me renova. Mas alí, entre os principais picos do Brasil, nasce e morre um Cinegrafista e uma forma de ver o mundo. Melhor, um novo nasce. Melhor ainda, os vários Samucas em mim fazem as pazes. E aquele outro que sempre procuramos a vida toda, desde pequenos, tenho a sorte de achar constantemente neste Paraíso.',
    portDate: '2020'
  },
  {
    portCover: pedraDaMina,
    portTitle: 'Pico da Pedra da Mina - Serra da Mantiqueira. MG-Brasil',
    portCategory: 'photo',
    portPath: '/photos',
    portId: 'p1',
    portResume:
      'Pico da Pedra da Mina, é um dos pontos culminantes na famosa Travessia da Serra Fina, que por sua vez é uma seção da serra da Mantiqueira, uma das mais importantes cadeias de montanhas do Brasil.',
    portDate: '2020'
  },
  {
    portCover: picoDoMarinzinho,
    portTitle: 'Pico do Marinzinho - Serra da Mantiqueira. SP-Brasil',
    portCategory: 'photo',
    portPath: '/photos',
    portId: 'p3',
    portResume:
      'Foi o primeiro local que filmei com um drone um paraiso que me acalma, melhora meu dia e me livra de qualquer tipo de stress, acredito realmente que o Pico dos Marins/Marinzinho tenha esse poder e nos ajuda a neutralizar nossa energia pessoal, filtrando um pouco das coisas ruins e negativas que nos cercam.\n' +
      'Serra da Mantiqueira onde me sinto em Paz e sou muito Feliz.',
    portDate: '2020'
  },
  {
    // portCover: jalapao,
    portTitle: 'Essência do Brasil - Jalapão. TO-Brasil',
    portCategory: 'video',
    portId: 'v1',
    portResume:
      'Uma terra das mais exuberantes do planeta. Natureza em estado bruto.\n' +
      'Descobrir os encantos do Jalapão sempre foi um sonho para mim. Cheguei sem saber o que realmente iria encontrar neste passeio alternativo da Cerrado Rupestre.\n' +
      'Foram dias memoráveis que marcou a minha vida, conheci pessoas, aprendi costumes, valorizei os detalhes, paisagens indescritíveis e histórias que vão ficar marcado no meu coração para sempre.',
    portDate: '2020',
    portFrame: 'https://www.youtube-nocookie.com/embed/6mhDFhcWeRg?rel=0?autoplay=1'
  },
  {
    // portCover: reencontroMontanha,
    portTitle: 'Reecontro - Montanha - Serra da Mantiqueira. MG - Brasil ',
    portCategory: 'video',
    portId: 'v2',
    portResume:
      'Reencontro é o nome do vídeo, Pico do Santo Agostinho na Serra da Mantiqueira é um dos cantinhos desconhecido por muitos, e o local que foi realizado as cenas, 𝐼𝑛𝑑𝑒𝑝𝑒𝑛𝑑𝑒𝑛𝑡𝑒 𝑑𝑜 𝑞𝑢𝑒 𝑗𝑎́ 𝑣𝑖𝑣𝑒𝑢, 𝑑𝑎𝑟 𝑖𝑚𝑝𝑜𝑟𝑡𝑎̂𝑛𝑐𝑖𝑎 𝑝𝑎𝑟𝑎 𝑜 𝑞𝑢𝑒 ℎ𝑎́ 𝑑𝑒 𝑣𝑖𝑟 𝑒 𝑜 𝑞𝑢𝑒 ℎ𝑎́ 𝑑𝑒 𝑣𝑖𝑣𝑒𝑟. 𝑅𝐸𝐸𝑁𝐶𝑂𝑁𝑇𝑅𝑂',
    portDate: '2020',
    portFrame: 'https://www.youtube-nocookie.com/embed/ddUSPXdx0QQ?rel=0?autoplay=1'
  },
  {
    // portCover: ondeTudoFazSentido,
    portTitle: 'Montanha - Onde Tudo faz Sentido - Serra da Mantiqueira. MG-Brasil',
    portCategory: 'video',
    portId: 'v2',
    portResume:
      'Amizade é daquelas relações que devemos cultivar e fazer presente e orgulhar-se da\n' +
      'jornada construída ao longo do tempo e histórias pra contar.\n' +
      'Acredito que amigo é aquele para o qual você não precisa dizer o que sente, quer ou\n' +
      'pensa. Porque amigo, amigo mesmo… tem conexão com a alma da gente. E, por isso, não\n' +
      'é escolha. É apenas as nossas almas juntando os seus pedaços... Gratidão por momentos\n' +
      'marcantes neste Local onde tudo faz Sentido Japa Doido Beiçudo Preto chamado Kazu',
    portDate: '2020',
    portFrame: 'https://www.youtube-nocookie.com/embed/JTkot3ct9AI?rel=0?autoplay=1'
  }
]

export default function Portfolio() {
  const [showVideoPort, setShowVideoPort] = useState(true)
  const [showPhotoPort, setShowPhotoPort] = useState(true)

  const showMidia = portCategory => {
    if (portCategory === 'photo') {
      return showPhotoPort
    }

    if (portCategory === 'video') {
      return showVideoPort
    }

    return false
  }

  return (
    <OverHiddenContainer>
      <Banner
        fontTitleBanner="NexaBlack"
        fontsizeTitleBanner="1.2em"
        fontweightTitleBanner="bold"
        bannerSubtitleColor="white"
        bannerColor="white"
      >
        PORTFÓLIO
      </Banner>
      <PortIconContainer>
        <PortLink to="/galeriadevideos">
          <GiFilmProjector />
          VIDEOS
        </PortLink>
        <PortLink to="/galeriadefotos">
          <FiCamera />
          FOTOS
        </PortLink>
      </PortIconContainer>
      <PortContainer>
        <div className="row">
          {midias.map(midia => {
            return showMidia(midia.portCategory) ? (
              <MidiasAndComments
                portCover={midia.portCover}
                portTitle={midia.portTitle}
                portCategory={midia.portCategory}
                portPath={midia.portPath}
                portFrame={midia.portFrame}
                portResume={midia.portResume}
                portDate={midia.portDate}
                key={midia.portId}
              />
            ) : null
          })}
        </div>
      </PortContainer>
    </OverHiddenContainer>
  )
}
