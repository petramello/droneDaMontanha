import styled from 'styled-components'

export const OverHiddenContainer = styled.div`
  overflow: hidden;
`

export const Container = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 620px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  text-decoration: none !important;
  overflow: hidden;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    height: 380px;
  }
`

export const HomeTitleContainer = styled.div`
  z-index: 100;
  margin: -400px 0 0 0;
  padding: 0;
  position: absolute;
  height: 120px;
  width: 100%;
  display: inline;
  color: black;
  font-family: 'NexaBlack', sans-serif;
  font-size: 1em;
  font-weight: bold;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.7em;
    margin: -250px 0 0 0;
  }
`

export const HomeTitle = styled.h1`
  margin-bottom: 0;
  text-align: center;
  padding: 0;
`

export const HomeSubtitle = styled.h3`
  font-family: 'NexaBold', sans-serif;
  text-align: center;
  margin-top: 5px;
  font-size: 1em;
  font-style: italic;
  margin-bottom: 0;
  letter-spacing: 1px;
`

export const InstaFrame = styled.iframe`
  width: 80%;
  height: 100%;
  border: none;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    justify-content: center;
    width: 50%;
    height: 75%;
    padding: 0;
    margin: 0;
  }
`

export const InstaSubtitle = styled.h3`
  font-family: 'NexaBold', sans-serif;
  text-align: center;
  padding: 60px 0 10px 0;
  font-size: 0.7em;
  margin: 0;
  color: black;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    justify-content: center;
    padding-top: 50px;
  }
`

export const InstaTitle = styled.h1`
  font-family: 'NexaRegular', sans-serif;
  color: black;
  margin: 0;
  text-align: center;
  padding: 10px 0 30px 0;
  font-size: 1.4em;
  letter-spacing: 4px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1em;
    justify-content: center;
    padding-bottom: 0;
  }
`

export const ShortProfile = styled.section`
  height: 400px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  width: 95%;
  padding: 35px;
  margin-top: 50px;
  text-align: center;
  font-family: 'NexaLight', sans-serif;
  color: #242424;
  overflow: hidden;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline;
    justify-content: center;
  }
`

export const ImgProfile = styled.img`
  margin-top: 5%;
  margin-left: 110px;
  position: relative;
  height: 65%;
  width: 25%;
  border-radius: 80%;
  box-shadow: 0 0 1em 0 #242424;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
    box-shadow: 0 0 0.5em 0 #242424;
    height: 75%;
    width: 35%;
  }
`

export const ResumeProfile = styled.p`
  font-size: 1em;
  font-family: 'NexaLight', sans-serif;
  font-style: italic;
  margin: auto 120px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.7em;
    margin: 25px 60px;
    text-align: center;
  }
`

export const SignProfile = styled.h1`
  position: absolute;
  top: 65%;
  left: 80%;
  font-family: 'NexaBold', sans-serif;
  font-size: 0.7em;
  color: #0f1011;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    position: relative;
    display: inline-flex;
    text-align: left;
    margin: 0 0 40px -60px;
    font-size: 0.5em;
  }
`
