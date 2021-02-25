import React from 'react'
import { ImageGroup, Image } from 'react-fullscreen-image'

import {
  MidiaCard,
  MidiaImgDiv,
  MidiaImg,
  MidiaVideoDiv,
  MidiaResume,
  MidiasContainer,
  MidiaTextContainer,
  MidiaTitle
} from './styled'

const MidiasAndComments = props => {
  const renderMidia = () => {
    if (props.portCategory === 'photo') {
      return (
        <ImageGroup className="button.fullscreen-toggle.toggle--left" style={{ display: 'none' }}>
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
        <MidiaVideoDiv>
          <iframe
            className="youtubePortIframe"
            src={props.portFrame}
            frameBorder="0"
            controls="0"
            title={props.portTitle}
            allow=" accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </MidiaVideoDiv>
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
