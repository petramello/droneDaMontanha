import styled from 'styled-components'

export const VideoContainer = styled.video`
  display: flex;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0;
  text-decoration: none !important;

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
