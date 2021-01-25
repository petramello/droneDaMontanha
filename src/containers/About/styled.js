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
  text-align: center;
  font-family: 'NexaLight', sans-serif;
  color: #242424;
  margin: 130px auto 20px auto;
`

export const ImgLongProfile = styled(ImgProfile)`
  margin: 50px 20px 50px 100px;
  width: 70%;
  border-radius: 50%;
  box-shadow: none;
  opacity: 90%;
`

export const BackLongProfile = styled.img`
  position: absolute;
  margin-top: -480px;
  margin-left: -300px;
  width: 70%;
  border-radius: 80%;
  box-shadow: 0 0 1.5em 0 r#242424;
  z-index: -200;
`
export const ResumeLongProfile = styled(ResumeProfile)`
  padding: 40px 0px 20px 40px;
`

export const LongSignProfile = styled(SignProfile)`
  top: 95%;
  left: 80%;
`

export const ServicesContainer = styled.div`
  width: 100%;
  position: relative;
  font-family: 'NexaLight', sans-serif;
  margin: 50px 0px 40px 140px;
  justify-content: center;
`

export const ServiceTopic = styled.div`
  position: relative;
  display: inline;
  font-size: 1.2em;
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
`

export const ServicesTitleLink = styled(ServicesTitle)`
  &:hover,
  &:focus {
    color: #084d6e !important;
  }
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
    color: #084d6e !important;
  }
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
    color: #084d6e !important;
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
