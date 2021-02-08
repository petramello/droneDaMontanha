import React from 'react'

import { BackdropContainer } from './styled'
import NavigationItem from '../Navigation/NavigationItems/NavigationItem'

const Backdrop = () => {
  return (
    <BackdropContainer>
      <NavigationItem link="/" exact>
        PÁGINA INICIAL
      </NavigationItem>
      <NavigationItem link="/sobre">O QUE FAÇO</NavigationItem>
      <NavigationItem link="/portfolio">PORTFÓLIO</NavigationItem>
      <NavigationItem link="/contato">CONTATO</NavigationItem>
    </BackdropContainer>
  )
}
export default Backdrop
