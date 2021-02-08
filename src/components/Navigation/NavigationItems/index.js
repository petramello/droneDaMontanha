import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../../hooks/hooks'

import NavigationItem from './NavigationItem'
import { ToolbarContainer, LinksContainer } from './styled'
import IconsSocialMedia from '../../Icons/SocialMedia'
import SideMenu from '../SideMenu'
import Backdrop from '../../Backdrop'

const NavigationItems = () => {
  // const [hideIcons, setHideIcons] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('scroll', hiddenIcons)
  //
  //   return () => window.removeEventListener('scroll', hiddenIcons)
  // }, [])
  //
  // const hiddenIcons = () => {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     setHideIcons(true)
  //   } else {
  //     setHideIcons(false)
  //   }
  // }

  const [open, setOpen] = useState(false)

  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  // const [showBackdrop, setShowBackdrop] = useState(false)
  //
  // const appearBackdrop = () => {
  //   if (showBackdrop === false) {
  //     setShowBackdrop(true)
  //   } else {
  //     setShowBackdrop(false)
  //   }
  // }

  return (
    <ToolbarContainer>
      {/* {hideIcons ? null : <IconsSocialMedia />} */}
      <IconsSocialMedia />
      <LinksContainer>
        <NavigationItem link="/" exact>
          PÁGINA INICIAL
        </NavigationItem>
        <NavigationItem link="/sobre">O QUE FAÇO</NavigationItem>
        <NavigationItem link="/portfolio">PORTFÓLIO</NavigationItem>
        <NavigationItem link="/contato">CONTATO</NavigationItem>
      </LinksContainer>
      <SideMenu open={open} setOpen={setOpen} />
      <div ref={node}>
        <Backdrop open={open} setOpen={setOpen} />
      </div>
    </ToolbarContainer>
  )
}
export default NavigationItems
