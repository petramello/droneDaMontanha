import React, { useEffect, useState } from 'react'

import NavigationItem from './NavigationItem'
import { ToolbarContainer, LinksContainer } from './styled'
import IconsSocialMedia from '../../Icons/SocialMedia'

const NavigationItems = () => {
  const [hideIcons, setHideIcons] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', hiddenIcons)

    return () => window.removeEventListener('scroll', hiddenIcons)
  }, [])

  const hiddenIcons = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setHideIcons(true)
    } else {
      setHideIcons(false)
    }
  }

  return (
    <ToolbarContainer>
      {hideIcons ? null : <IconsSocialMedia />}

      <LinksContainer>
        <NavigationItem link="/" exact>
          PÁGINA INICIAL
        </NavigationItem>
        <NavigationItem link="/sobre">O QUE FAÇO</NavigationItem>
        <NavigationItem link="/portfolio">PORTFÓLIO</NavigationItem>
        <NavigationItem link="/contato">CONTATO</NavigationItem>
      </LinksContainer>
    </ToolbarContainer>
  )
}
export default NavigationItems
