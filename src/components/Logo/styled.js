import styled from 'styled-components'

export const LogoContainer = styled.div`
  background-color: #0f1011;
  padding: 0;
  margin-left: 40px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 15px 12px 0 20px;
    height: 80%;
  }
`

export const LogoImg = styled.img`
  height: 100%;
`
