import styled from 'styled-components'

export const ToolbarContainer = styled.header`
  height: 100px;
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
  overflow: hidden;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 200%;
    height: 80px;
  }
`
export const LogoLink = styled.a`
  height: 100%;
`
