import styled from 'styled-components'
import { IconsContainer } from '../Icons/SocialMedia/styled'

export const FooterContainer = styled.div`
  position: relative;
  background-color: #16697a;
  font-family: 'NexaLight', sans-serif;
  font-size: 1em;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`

export const IconsFooterContainer = styled(IconsContainer)`
  width: 100%;
  display: inline-block;
  margin: 10px auto 20px 562px;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    padding: 0;
    margin: 2% auto 4% 28%;
    justify-content: center;
  }

  @media (max-width: 380px), handheld and (orientation: landscape) {
    padding: 0;
    margin: 2% auto 4% 24%;
    justify-content: center;
  }

  @media (max-width: 320px), handheld and (orientation: landscape) {
    padding: 0;
    margin: 2% auto 4% 20%;
    justify-content: center;
  }

  @media (min-width: 1824px) {
    margin: 10px auto 20px 800px;
  }
`

export const CopyrightText = styled.p`
  padding-top: 10px;
  font-size: 0.7em;
  margin-bottom: 5px;
`

export const DevelopmentLink = styled.a`
  padding-top: 10px;
  font-size: 0.5em;
  margin-bottom: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #ffa62bff !important;
  }

  &:active,
  &:visited,
  &:link,
  &:focus {
    text-decoration: none;
    color: #0f1011;
  }
`
