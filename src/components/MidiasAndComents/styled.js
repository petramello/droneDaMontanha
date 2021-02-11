import styled from 'styled-components'

export const MidiasContainer = styled.div`
  display: inline-flex;
  height: 300px;
  width: 100%;
  margin: 10px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline;
    width: 340px;
  }

  @media (min-width: 1824px) {
    width: 180%;
    height: 350px;
    margin: 40px 80px;
  }
`
export const MidiaCard = styled.div`
  display: inline-flex;
  height: 300px;
  position: relative;
  width: 100%;
  font-family: 'NexaRegular', sans-serif;
  color: #0f1011;
  padding: 30px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline;
    margin: 30px;
    padding: 20px 0;
    width: 340px;
  }

  @media (min-width: 1824px) {
    @media (min-width: 1824px) {
      width: 180%;
      height: 350px;
      margin-left: 40px;
      padding: 20px;
    }
  }
`

export const MidiaImgDiv = styled.div`
  width: 400px;
  height: 250px;
  object-fit: fill;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 340px;
    height: 200px;
  }

  @media (min-width: 1824px) {
    width: 550px;
    height: 350px;
  }
`

export const MidiaImg = styled.div`
  width: 400px;
  height: 250px;
  object-fit: fill;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 340px;
    height: 200px;
  }

  @media (min-width: 1824px) {
    width: 550px;
    height: 350px;
  }
`

export const MidiaVideo = styled.video`
  width: 400px;
  height: 250px;
  object-fit: fill;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 340px;
    height: 200px;
  }

  @media (min-width: 1824px) {
    width: 550px;
    height: 350px;
  }
`

export const MidiaTextContainer = styled.div`
  text-align: left;
  width: 410px;
  height: 250px;
  margin-left: 40px;
  padding: 0;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 280px;
    margin-left: 30px;
    height: 100%;
  }
`

export const MidiaTitle = styled.h1`
  font-family: 'NexaRegular', serif;
  padding: ${props => props.paddingMidiaTitle || '5px 0 10px 0'};
  font-size:  0.8em;
  letter-spacing: 4px;
  text-decoration: none;
  color: #0f1011 !important;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size:  ${props => props.fontsizeMidiaTitleSmall || '0.8em'};
    letter-spacing: ${props => props.letterspacingMidiaTitleSmall || '4px'};
  }
`

export const MidiaResume = styled.p`
  font-family: 'NexaLight', sans-serif;
  text-align: justify;
  font-size: 0.9em;
  text-decoration: none;
  color: #0f1011 !important;
`
