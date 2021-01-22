import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import MenuToggle from '../SideMenu/MenuToggle'

import { ToolbarContainer, LogoLink } from './styled'

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <LogoLink>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </LogoLink>
      <NavigationItems />
      <MenuToggle />
    </ToolbarContainer>
  )
}
export default Toolbar
