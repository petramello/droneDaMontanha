import styled from 'styled-components'
import bannerTestaItaguare from '../../assets/imgHome/bannerTestaItaguare.jpg'

export const HomeBannerContainer = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 10px;
  text-decoration: none;
  background-image: url(${bannerTestaItaguare});
  background-size: cover;
  overflow: hidden;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    background-repeat: no-repeat;
    background-size: cover;
    height: 380px;
    margin-top: 0;
    padding: 0;
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
