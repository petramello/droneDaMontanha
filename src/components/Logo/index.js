import React from 'react'

import logo from '../../assets/imgBrand/logo.png'
import { LogoContainer, LogoImg } from './styled'

const Logo = () => (
  <LogoContainer>
    <LogoImg src={logo} alt="Logotipo da marca Drone da Montanha" />
  </LogoContainer>
)
export default Logo
