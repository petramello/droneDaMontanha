import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavigationItemContainer = styled.li`
  color: white;
  list-style-type: none;
  padding: 0;
  position: relative;
  z-index: 9999;
  display: flex;
`

export const NavigationItemLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  display: flex;
  color: white;

  &:hover,
  &:active,
  &:focus {
    color: #489fb5ff;
    border-bottom: 1px solid #489fb5ff;
    text-decoration: none !important;
  }
`
