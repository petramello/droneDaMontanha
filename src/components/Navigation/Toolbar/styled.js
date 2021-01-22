import styled from 'styled-components'

export const ToolbarContainer = styled.header`
  height: 85px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0f1011;
  display: inline-flex;
  padding: 10px;
  z-index: 999;
  color: #ede7e3ff;
  font-weight: bold;
  font-family: 'NexaRegular', sans-serif;

  @media (max-width: 600px) {
    display: none;
  }
`
export const LogoLink = styled.a`
  height: 100%;
`
