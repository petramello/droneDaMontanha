import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ImgProfile, ResumeProfile, SignProfile } from '../Home/styled'

export const AboutContainer = styled.div`
  overflow: hidden;
`

export const LongProfile = styled.section`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 620px;
  text-align: center;
  font-family: 'NexaLight', sans-serif;
  color: #242424;
  margin: 130px auto 0px 40px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline;
  }

  @media (min-width: 1824px) {
    margin: 220px auto 0px 40px;
  }
`

export const ImgLongProfile = styled(ImgProfile)`
  margin: 50px 20px 30px 100px;
  width: 70%;
  border-radius: 50%;
  box-shadow: none;
  opacity: 90%;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 140px auto 10px auto;
    width: 50%;
  }

  @media (min-width: 1824px) {
    margin: 220px auto 0px 40px;
  }
`

export const BackLongProfile = styled.img`
  position: relative;
  margin-top: -500px;
  margin-left: -200px;
  width: 200%;
  border-radius: 80%;
  box-shadow: 0 0 1.5em 0 r#242424;
  z-index: -200;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 160%;
    top: 100px;
    left: 75px;
  }

  @media (min-width: 1824px) {
    top: -200px;
    width: 200%;
    left: -60px;
    margin-bottom: 0;
  }
`
export const ResumeLongProfile = styled(ResumeProfile)`
  padding: 20px 0 0 40px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    padding: 10px 0;
  }

  @media (min-width: 1824px) {
    padding: 0;
  }
`

export const LongSignProfile = styled(SignProfile)`
  top: 80%;
  left: 80%;

  @media (min-width: 1824px) {
    top: 62%;
  }
`

export const ServicesContainer = styled.div`
  width: 100%;
  position: relative;
  font-family: 'NexaLight', sans-serif;
  margin: 0 0 40px 180px;
  padding-top: 0;
  justify-content: center;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 20px 0px 20px 60px;
  }

  @media (min-width: 1824px) {
    margin: 0px 10px 20px 240px;
  }
`

export const ServiceTopic = styled.div`
  position: relative;
  display: inline;
  font-size: 1.2em;
  margin-top: 0;
  padding-bottom: 50px;
  left: -5%;
  font-family: 'NexaRegular', sans-serif;
`

export const ServicesTitle = styled.h1`
  font-family: 'NexaRegular', sans-serif;
  font-size: 1.2em;
  color: #0f1011;
  font-weight: bold;
  padding-bottom: 0;
  margin: 0;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin-bottom: 20px;
    font-size: 1.1em;
  }
`

export const ServicesTitleLink = styled(ServicesTitle)`
  &:hover,
  &:focus {
    color: deepskyblue !important;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    color: #084d6e !important;
`

export const ServiceIcon = styled.i`
  font-size: 3em;
  text-decoration: none;
`

export const ServiceContainer = styled.div`
  margin-top: 60px;
  position: relative;
  display: inline-flex;
  font-size: 1.1em;
  left: -5%;
  height: 200px;
  width: 45%;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: flex;
    width: 80%;
    height: 100%;
    margin-top: 8px;
    font-size: 1em;
  }
`

export const ServiceNavLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  text-decoration: none !important;
  color: #0f1011;
`

export const ServicesTextContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
`

export const ServicesTextLinkContainer = styled(ServicesTextContainer)`
  &:hover,
  &:focus {
    color: deepskyblue !important;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    color: #084d6e !important;
`

export const ServiceLinkContainer = styled.div`
  margin-top: 60px;
  position: relative;
  display: inline-flex;
  font-size: 1.1em;
  left: -5%;
  height: 200px;
  width: 45%;

  &:hover,
  &:focus {
    color: deepskyblue !important;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: flex;
    width: 80%;
    height: 100%;
    margin-top: 8px;
    font-size: 1em;
    color: deepskyblue !important;
  }
`

export const IndividualServiceIcon = styled.i`
  position: relative;
  font-size: 2em;
  left: -5%;
`

export const ServicesText = styled.p`
  font-size: 0.8em;
  width: 87%;
  text-align: justify;
`

export const DroneIcon = styled.img`
  width: 35px;
  margin: 0;
  padding: 0;
`
