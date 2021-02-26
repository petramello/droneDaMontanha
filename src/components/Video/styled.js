import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 610px;
  position: relative;
  margin: 0 auto;
  padding: 0;
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
  border: none;
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
    height: 380px;
    left: 0%;
    margin: -15% auto -15% auto;
    border: none;
  }

  @media (max-width: 471px), handheld and (orientation: landscape) {
    height: 375px;
  }

  @media (max-width: 380px), handheld and (orientation: landscape) {
    height: 300px;
  }

  @media (max-width: 320px), handheld and (orientation: landscape) {
    height: 255px;
  }

  @media (min-width: 1824px) {
    height: 1080px;
    object-fit: fill;
    margin: -80px auto -65px auto;
    box-sizing: border-box;
  }
`
