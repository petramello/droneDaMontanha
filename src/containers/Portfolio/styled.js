import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PortIconContainer = styled.div`
  justify-content: center;
  text-align: center;
  font-family: 'NexaBold', serif;
  font-size: 0.7em;
  position: fixed;
  width: 190px;
  height: 60px;
  color: whitesmoke;
  left: 92%;
  top: 520px;
  z-index: 90;
  font-style: normal;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    left: 75%;
    top: 520px;
  }
`

export const PortLink = styled(NavLink)`
  align-items: center;
  display: flex;
  background-color: #16697aff;
  color: white !important;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  padding: 3px 5px;
  width: 70px;
  border-radius: 10%;
  margin: 8px 0;
  opacity: 90%;

  &:hover {
    color: #ffa62bff !important;
    text-decoration: underline;
    opacity: 100%;
  }

  &:visited,
  &:active {
    text-decoration: none !important;
    color: whitesmoke;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 60px;
  }
`
export const PortContainer = styled.section`
  width: 100%;
  padding: 10px;
  position: relative;
  margin: 50px auto 0 80px;
  align-content: center;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 80px 20px 40px 20px;
  }
`
