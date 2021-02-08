import styled from 'styled-components'

export const VideoContainer = styled.video`
  display: inline-flex;
  width: 100%;
  height: fit-content;
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

  @media (max-width: 399px) {
    width: 100%;
    height: 380px;
    object-fit: fill;
  }
`
