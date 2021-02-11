import styled from 'styled-components'
import { IconsContainer } from '../Icons/SocialMedia/styled'

export const FooterContainer = styled.div`
  position: relative;
  background-color: #16697aff;
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
  margin: 2% auto 2% 38%;
  text-align: center;
  justify-self: center;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    padding: 0;
    margin: 2% auto 4% 25%;
    justify-content: center;
  }

  @media (min-width: 1824px) {
    margin: 2% 25% 4% 42%;
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
    color: #82c0ccff !important;
  }

  &:active,
  &:visited,
  &:link,
  &:focus {
    text-decoration: none;
    color: #0f1011;
  }
`
