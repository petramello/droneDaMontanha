import styled from 'styled-components'
import serraFinaII from '../../assets/imgCovers/serraFinaII_96_1920.jpg'

export const BannerContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 380px;
  text-decoration: none;
  background-image: url(${props => props.imgBack || serraFinaII});
  background-size: 100% 380px;
  background-repeat: no-repeat;
  margin-top: 80px;
  margin-bottom: 10px;
  overflow: hidden;
`

export const BannerTitle = styled.h1`
  font-size: 1em;
  font-family: 'NexaHeavy', sans-serif;
  margin: auto 120px;
  font-style: normal;
`
export const BannerSubtitle = styled.h2`
  position: absolute;
  top: 200px;
  align-items: center;
  font-family: 'NexaBold', sans-serif;
  font-size: 0.5em;
  color: #0f1011;
  font-weight: lighter;
  font-style: italic;
`
