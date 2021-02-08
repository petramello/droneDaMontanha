import React from 'react'
import { bool } from 'prop-types'

import { BackdropContainer } from './styled'
import NavigationItem from '../Navigation/NavigationItems/NavigationItem'

const Backdrop = ({ open, props }) => {
  return (
    <BackdropContainer open={open}>
      <NavigationItem link="/" exact>
        PÁGINA INICIAL
      </NavigationItem>
      <NavigationItem link="/sobre">O QUE FAÇO</NavigationItem>
      <NavigationItem link="/portfolio">PORTFÓLIO</NavigationItem>
      <NavigationItem link="/contato">CONTATO</NavigationItem>
    </BackdropContainer>
  )
}
Backdrop.propTypes = {
  open: bool.isRequired
}

export default Backdrop
