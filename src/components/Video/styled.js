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
    width: 110%;
    height: 400px;
    object-fit: fill;
    margin-top: -40px;
  }
`
