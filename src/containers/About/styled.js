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
  margin: 190px auto 20px 40px;

  @media (max-width: 399px) {
    display: inline;
  }
`

export const ImgLongProfile = styled(ImgProfile)`
  margin: 50px 20px 50px 100px;
  width: 70%;
  border-radius: 50%;
  box-shadow: none;
  opacity: 90%;

  @media (max-width: 399px) {
    margin: 140px auto 10px auto;
    width: 50%;
  }
`

export const BackLongProfile = styled.img`
  position: absolute;
  margin-top: -480px;
  margin-left: -300px;
  width: 60%;
  border-radius: 80%;
  box-shadow: 0 0 1.5em 0 r#242424;
  z-index: -200;

  @media (max-width: 399px) {
    margin-top: 65px;
    margin-left: -400px;
    width: 600px;
  }
`
export const ResumeLongProfile = styled(ResumeProfile)`
  padding: 40px 0px 10px 40px;

  @media (max-width: 399px) {
    padding: 10px 0;
  }
`

export const LongSignProfile = styled(SignProfile)`
  top: 95%;
  left: 80%;
`

export const ServicesContainer = styled.div`
  width: 100%;
  position: relative;
  font-family: 'NexaLight', sans-serif;
  margin: 30px 0px 40px 180px;
  justify-content: center;

  @media (max-width: 399px) {
    margin: 20px 0px 20px 60px;
  }
`

export const ServiceTopic = styled.div`
  position: relative;
  display: inline;
  font-size: 1.2em;
  padding-bottom: 50px;
  left: -5%;
  font-family: 'NexaRegular', sans-serif;
  }
`

export const ServicesTitle = styled.h1`
  font-family: 'NexaRegular', sans-serif;
  font-size: 1.2em;
  color: #0f1011;
  font-weight: bold;
  padding-bottom: 0;
  margin: 0;

  @media (max-width: 399px) {
    margin-bottom: 20px;
    font-size: 1.1em;
  }
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

  @media (max-width: 399px) {
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

  @media (max-width: 399px) {
    display: flex;
    width: 80%;
    height: 100%;
    margin-top: 8px;
    font-size: 1em;
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
