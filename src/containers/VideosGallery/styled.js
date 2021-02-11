import styled from 'styled-components'

export const WideVideo = styled.video`
  width: 920px;
  height: 480px;
  object-fit: fill;
  margin-bottom: 10px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 1824px) {
    width: 70%;
    height: 520px;
    margin-left: 80px;
  }
`

export const NarrowVideo = styled.video`
  width: 920px;
  height: 480px;
  object-fit: fill;
  margin-bottom: 10px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 1824px) {
    width: 70%;
    height: 520px;
    margin-left: 80px;
  }
`
