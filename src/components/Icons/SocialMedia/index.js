import React from 'react'
import { FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import { IconLink, IconsContainer, IconContainer } from './styled'

const IconsSocialMedia = ({ iconColor, iconHoverColor }) => {
  const defaultProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    iconColor,
    iconHoverColor
  }

  return (
    <IconsContainer>
      <IconContainer>
        <IconLink
          href="https://www.youtube.com/user/SAMUPINDA"
          alt="ícone do youtube do Drone da Montanha"
          {...defaultProps}
        >
          <i>
            <FaYoutube />
          </i>
        </IconLink>
      </IconContainer>

      <IconContainer>
        <IconLink
          href="https://www.instagram.com/drone_da_montanha/"
          alt="ícone do instagram drone_da_montanha"
          {...defaultProps}
        >
          <i>
            <RiInstagramFill />
          </i>
        </IconLink>
      </IconContainer>

      <IconContainer>
        <IconLink
          href="mailto:samueloscar@dronedamontanha.com"
          alt="ícone para enviar e-mail para o endereço: samueloscar@dronedamontanha.com"
          {...defaultProps}
        >
          <i>
            <FiMail />
          </i>
        </IconLink>
      </IconContainer>

      <IconContainer>
        <IconLink
          href="https://wa.me/5512997234917"
          alt="ícone de whatsapp para enviar mensagem para: +5512997234917"
          {...defaultProps}
        >
          <i>
            <FaWhatsapp />
          </i>
        </IconLink>
      </IconContainer>
    </IconsContainer>
  )
}

export default IconsSocialMedia
