import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PortIconContainer = styled.div`
  justify-content: center;
  text-align: center;
  font-family: 'NexaBold', serif;
  font-size: 0.7em;
  position: fixed;
  width: 200px;
  height: 60px;
  color: whitesmoke;
  left: 84%;
  top: 512px;
  z-index: 90;
  font-style: normal;
`

export const PortLink = styled(NavLink)`
  align-items: center;
  display: inline-flex;
  background-color: #16697aff;
  color: white !important;
  text-decoration: none;
  padding: 2px 5px;
  width: 55px;
  border-radius: 10%;
  margin: 3px;
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
`
export const PortContainer = styled.section`
  width: 100%;
  padding: 10px;
  position: relative;
  margin: 50px auto 0 auto;
  align-content: center;
`
