import React from 'react'

import IconsSocialMedia from '../Icons/SocialMedia'
import { IconsFooterContainer, FooterContainer, CopyrightText, DevelopmentLink } from './styled'

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        <p>&copy; drone_da_montanha - todos os direitos reservados</p>
        <DevelopmentLink href="https://www.linkedin.com/in/petramello/" target="_blank" rel="noopener noreferrer">
          desenvolvido por @petramello
        </DevelopmentLink>
      </CopyrightText>
      <IconsFooterContainer>
        <IconsSocialMedia iconColor="#489fb5ff" iconHoverColor="#ffa62bff" />
      </IconsFooterContainer>
    </FooterContainer>
  )
}
export default Footer
