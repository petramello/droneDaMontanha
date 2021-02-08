import React from 'react'
import { bool, func } from 'prop-types'

import { SideBarMenu, SideMenuContainer } from './styled'

const SideMenu = ({ open, setOpen }) => {
  return (
    <SideMenuContainer open={open} onClick={() => setOpen(!open)}>
      <SideBarMenu />
      <SideBarMenu />
      <SideBarMenu />
      <SideBarMenu />
    </SideMenuContainer>
  )
}
SideMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default SideMenu
