import styled from 'styled-components'

export const VideoContainer = styled.video`
  display: inline-flex;
  width: 100%;
  height: fit-content;
  position: relative;
  margin: 10px auto 100px auto;
  padding: 5px 0;
  text-decoration: none !important;
  overflow: hidden;

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
    height: 100%;
    margin: 0;
    object-fit: fill;
  }

  @media (min-width: 1824px) {
    width: 100%;
    height: 100%;
    object-fit: fill;
    margin: 0 auto;
  }
`

export const VideoIframe = styled.iframe`
  display: flex;
  position: relative;
  width: 100%;
  height: 725px;
  margin: -10px auto -10px auto;
  padding-bottom: 0;
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
    display: block;
    width: 100%;
    height: 340px;
    margin: -20px auto -110px auto;
    box-sizing: border-box;
    top: 0;
  }

  @media (min-width: 1824px) {
    height: 1080px;
    object-fit: fill;
    margin: -20px auto -110px auto;
    box-sizing: border-box;
  }
`
