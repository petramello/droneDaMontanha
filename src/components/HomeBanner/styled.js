import styled from 'styled-components'
import testaItaguare from '../../assets/imgHome/testaItaguare_FotoGabrielTarso.jpg'

export const HomeBannerContainer = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background-image: url(${testaItaguare});
  background-size: cover;
  overflow: hidden;

  @media (max-width: 399px) {
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const HomeBannerH3 = styled.h3`
  width: 100%;
  margin-top: 90px;
  margin-bottom: 40px;
  justify-content: center;
  text-align: center;
  position: relative;
  font-family: 'NexaRegular', sans-serif;
  color: white;
  font-size: 0.8em;
  letter-spacing: 10px;
`
