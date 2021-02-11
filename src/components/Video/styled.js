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
    object-fit: fill;
  }

  @media (min-width: 1824px) {
    width: 100%;
    height: 100%;
    object-fit: fill;
    margin: 0 auto;
  }
`
