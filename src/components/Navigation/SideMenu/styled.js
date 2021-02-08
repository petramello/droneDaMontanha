import styled from 'styled-components'

export const SideMenuContainer = styled.div`
  position: absolute;
  width: 60px;
  font-size: 0.9em;
  height: 60px;
  padding-top: 15px;
  z-index: 1000;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  left: 39%;

  @media (min-width: 399px) {
    display: none;
  }
`

export const SideBarMenu = styled.div`
  width: 70%;
  height: 4px;
  margin: 5px;
  border-radius: 20%;
  background-color: white;
  z-index: 1000;
  left: 39%;

  @media (min-width: 399px) {
    display: none;
  }
`
