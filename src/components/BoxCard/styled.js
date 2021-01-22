import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const BoxCardButton = styled.button`
  display: block;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  height: 60px;
  width: 140px;
  border: none;
  background-color: ${props => props.buttonColor || 'black'};
  opacity: 50%;
  font-family: 'NexaBold', sans-serif;
  font-size: 0.8em;
  font-weight: normal;
  letter-spacing: 2px;
  text-decoration: none;

  &:hover,
  &:active,
  &:visited,
  &:link,
  &:focus {
    text-decoration: none;
    font-size: 0.9em;
    font-weight: bold;
    opacity: 100%;
    color: #489fb5ff !important;
  }
`

export const BoxCardLink = styled(NavLink)`
  font-family: 'NexaRegular', sans-serif;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: bold;
  color: #489fb5ff;

  &:hover {
    border-bottom: 1px solid #489fb5ff;
  }

  &:hover,
  &:active,
  &:link,
  &:focus {
    text-decoration: none;
    color: #489fb5ff !important;
  }
`
