import styled from 'styled-components'

export const MidiasContainer = styled.div`
  display: inline-flex;
  height: 300px;
  width: 100%;
  margin: 10px;

  @media (max-width: 399px) {
    display: inline;
    width: 340px;
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

  @media (max-width: 399px) {
    display: inline;
    margin: 30px;
    padding: 20px 0;
    width: 340px;
  }
`

export const MidiaImgDiv = styled.div`
  width: 400px;
  height: 250px;
  object-fit: fill;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 399px) {
    width: 340px;
    height: 200px;
  }
`

export const MidiaImg = styled.div`
  width: 400px;
  height: 250px;
  object-fit: fill;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 399px) {
    width: 340px;
    height: 200px;
  }
`

export const MidiaVideo = styled.video`
  width: 400px;
  height: 250px;
  object-fit: fill;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 399px) {
    width: 340px;
    height: 200px;
  }
`

export const MidiaTextContainer = styled.div`
  text-align: left;
  width: 410px;
  height: 250px;
  margin-left: 40px;
  padding: 0;

  @media (max-width: 399px) {
    width: 280px;
    margin-left: 30px;
    height: 100%;
  }
`

export const MidiaTitle = styled.h1`
  font-family: 'NexaRegular', serif;
  padding: 5px 0 10px 0;
  font-size: 0.8em;
  letter-spacing: 4px;
  text-decoration: none;
  color: #0f1011 !important;
`

export const MidiaResume = styled.p`
  font-family: 'NexaLight', sans-serif;
  text-align: justify;
  font-size: 0.9em;
  text-decoration: none;
  color: #0f1011 !important;
`
