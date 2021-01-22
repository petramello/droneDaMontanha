import React from 'react'

import DroneLogoAzul from '../../assets/imgBrand/droneLogoAzul.jpg'
import { LogoContainer, LogoImg } from './styled'

const Logo = () => (
  <LogoContainer>
    <LogoImg src={DroneLogoAzul} alt="Logotipo do Drone da Montanha" />
  </LogoContainer>
)
export default Logo
