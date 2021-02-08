import styled from 'styled-components'

export const WideVideo = styled.video`
  width: 880px;
  height: 480px;
  object-fit: fill;
  margin-bottom: 50px;

  @media (max-width: 399px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

export const NarrowVideo = styled.video`
  width: 880px;
  height: 480px;
  object-fit: fill;
  margin-bottom: 50px;

  @media (max-width: 399px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`
