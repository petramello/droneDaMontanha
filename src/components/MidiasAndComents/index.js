import React from 'react'
import { ImageGroup, Image } from 'react-fullscreen-image'

import {
  MidiaCard,
  MidiaImgDiv,
  MidiaImg,
  MidiaVideo,
  MidiaResume,
  MidiasContainer,
  MidiaTextContainer,
  MidiaTitle
} from './styled'

const MidiasAndComments = props => {
  const renderMidia = () => {
    if (props.portCategory === 'photo') {
      return (
        <ImageGroup>
          <MidiaImg>
            <Image
              src={props.portCover}
              alt="Capa da fotografia do portfolio"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                objectFit: 'fill'
              }}
            />
          </MidiaImg>
        </ImageGroup>
      )
    }

    if (props.portCategory === 'video') {
      return (
        <MidiaVideo controls width="100%" src={props.portCover} type="video/mp4" alt="Capa do video do portfolio" />
      )
    }

    return null
  }

  return (
    <MidiasContainer category={props.portCategory} key={props.portId}>
      <MidiaCard>
        <MidiaImgDiv>{renderMidia()}</MidiaImgDiv>
        <MidiaTextContainer>
          <MidiaTitle>{props.portTitle}</MidiaTitle>
          <MidiaResume>{props.portResume}</MidiaResume>
        </MidiaTextContainer>
      </MidiaCard>
    </MidiasContainer>
  )
}
export default MidiasAndComments
