import styled from 'styled-components'

// export const WideVideo = styled.video`
//   width: 920px;
//   height: 480px;
//   object-fit: fill;
//   margin-bottom: 10px;
//
//   @media (max-width: 480px), handheld and (orientation: landscape) {
//     width: 100%;
//     height: 100%;
//     margin: 0;
//     padding: 0;
//   }
//
//   @media (min-width: 1824px) {
//     width: 70%;
//     height: 520px;
//     margin-left: 80px;
//   }
// `

export const VideoTitle = styled.h1`
  font-family: 'NexaRegular', serif;
  padding: 35px 0 5px 7px;
  font-size: 0.7em;
  letter-spacing: 5px;
  text-decoration: none;
  color: #0f1011 !important;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    padding: 20px 0 0 7px;
    font-size: 0.5em;
    letter-spacing: 2px;
  }
`

export const VideoDiv = styled.div`
  position: relative;
  width: 920px;
  height: 480px;
  object-fit: fill;
  margin-bottom: 10px;
  transition: visibility 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  @media (min-width: 1824px) {
    width: 120%;
    height: 520px;
    margin-left: 80px;
  }

  .youtubeIframe {
    width: 920px;
    height: 100%;

    @media (min-width: 1824px) {
      width: 1200px;
      height: 520px;
      margin-left: -80px;
    }

    @media (max-width: 480px), handheld and (orientation: landscape) {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
  }
`
