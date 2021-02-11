import styled from 'styled-components'

export const BannerVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 400px;
  text-decoration: none;
  margin-top: 80px;
  margin-bottom: 10px;
  overflow: hidden;
  color: white;

  @media (max-width: 480px), handheld and (orientation: landscape) {
   width: 100%;
    height: 250px;
    object-fit: fill;
    margin-top: 100px;
  }
`

export const ContactVideo = styled.video`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  text-decoration: none !important;
  overflow: hidden;
  object-fit: fill;

  &:hover,
  &:focus,
  &:active,
  &:link,
  &:visited {
    text-decoration: none !important;
    border: none !important;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 100%;
    height: 250px;
    object-fit: fill;
  }
`

export const BannerContactTitle = styled.h1`
  position: absolute;
  top: 180px;
  font-size: 1.2em;
  font-family: 'NexaBlack', sans-serif;
  margin: auto 120px;
  font-style: normal;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    top: 120px;
    margin: auto 60px;
  }
`

export const BannerContactSubtitle = styled.h2`
  position: absolute;
  top: 200px;
  align-items: center;
  font-family: 'NexaBold', sans-serif;
  font-size: 0.5em;
  color: #0f1011;
  font-weight: lighter;
  font-style: italic;
`
