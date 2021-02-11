import styled from 'styled-components'
import serraFinaII from '../../assets/imgCovers/bannerCover_SerraFinaII.jpg'
import serraFinaIISmall from '../../assets/imgCovers/bannerSmall_SerraFinaII.jpg'

export const BannerContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 400px;
  text-decoration: none;
  background-image: url(${props => props.imgBack || serraFinaII});
  background-size: 100% 400px;
  background-repeat: no-repeat;
  margin-top: 80px;
  margin-bottom: 10px;
  overflow: hidden;
  color: ${props => props.bannerColor || '#0f1011'};

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin-bottom: 5px;
    background-image: url(${props => props.imgBackSmall || serraFinaIISmall});
  }
`

export const BannerTitle = styled.h1`
  font-size: ${props => props.fontsizeTitleBanner || '1em'};
  font-family: ${props => props.fontTitleBanner || 'NexaHeavy, sans-serif'};
  margin: auto 120px;
  font-style: normal;
  font-weight: ${props => props.fontweightTitleBanner || 'none'};
`

export const BannerSubtitle = styled.h2`
  position: absolute;
  top: 200px;
  align-items: center;
  font-family: 'NexaBold', sans-serif;
  font-size: 0.5em;
  color: ${props => props.bannerSubtitleColor || '#0f1011'};
  font-weight: lighter;
  font-style: italic;
`
