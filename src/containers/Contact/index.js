import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import { RiInstagramFill } from 'react-icons/ri'

import apiKeys from './apikeys'

import {
  ContactContainer,
  ContactDiv,
  Contacts,
  ContactLink,
  FormContainer,
  Form,
  ContactTitle,
  LabelTitle,
  Input,
  MsgArea,
  Button
} from './styled'

import BannerContactVideo from '../../components/BannerVideo/index'
import videoDrone from '../../assets/imgContact/videoDrone.mp4'
import { ContactVideoIframe } from '../../components/BannerVideo/styled'

export default function Contact() {
  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const onNameChange = event => {
    setContactState({ ...contactState, name: event.target.value })
  }

  const onPhoneChange = event => {
    setContactState({ ...contactState, phone: event.target.value })
  }

  const onEmailChange = event => {
    setContactState({ ...contactState, email: event.target.value })
  }

  const onMessageChange = event => {
    setContactState({ ...contactState, message: event.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault() // Prevents default refresh by the browser
    emailjs
      .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(
        result => {
          // eslint-disable-next-line no-alert
          alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.', result.text)
        },
        error => {
          // eslint-disable-next-line no-alert
          alert('Sua mensagem não foi enviada. Por favor, revise seus dados.', error.text)
        }
      )
      .then(setContactState({ name: '', email: '', phone: '', message: '' }))
  }

  return (
    <div>
      <BannerContactVideo title="CONTATO">
        <source src={videoDrone} type="video/mp4" alt="Video com drone decolando da mão do filmmaker Samuel Oscar" />
        Your browser does not support the index tag.
      </BannerContactVideo>

      <ContactContainer className=" column">
        <Contacts>
          <ContactDiv>
            <ContactLink
              href="mailto:samueloscar@dronedamontanha.com"
              target="_blank"
              rel="noopener noreferrer"
              alt="ícone para enviar e-mail para o endereço: samueloscar@dronedamontanha.com"
            >
              <i>
                <FiMail />
              </i>{' '}
              samueloscar
            </ContactLink>
            <ContactLink
              href="https://wa.me/5512997234917"
              target="_blank"
              rel="noopener noreferrer"
              alt="ícone de whatsapp para enviar mensagem para: +5512997234917"
            >
              <i>
                <FaWhatsapp />
              </i>{' '}
              12 99723-4917
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/drone_da_montanha/"
              target="_blank"
              rel="noopener noreferrer"
              alt="ícone do instagram drone_da_montanha"
            >
              <i>
                <RiInstagramFill />
              </i>{' '}
              drone_da_montanha
            </ContactLink>
            <ContactLink
              href="https://www.youtube.com/user/SAMUPINDA"
              target="_blank"
              rel="noopener noreferrer"
              alt="ícone do youtube do Drone da Montanha"
            >
              <i>
                <FaYoutube />
              </i>{' '}
              Samuel Oscar - DRONE DA MONATANHA
            </ContactLink>
          </ContactDiv>
        </Contacts>

        <FormContainer>
          <Form onSubmit={handleSubmit} method="post">
            <ContactTitle>ENTRE EM CONTATO</ContactTitle>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <LabelTitle>
              Nome:
              <Input
                type="text"
                name="name"
                placeholder="digite seu nome aqui"
                value={contactState.name}
                onChange={onNameChange}
              />
            </LabelTitle>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <LabelTitle>
              E-mail:
              <Input
                widthInput="314px"
                type="email"
                name="email"
                placeholder="exemplo: everest@gmail.com"
                value={contactState.email}
                onChange={onEmailChange}
              />
            </LabelTitle>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <LabelTitle>
              Telefone:
              <Input
                widthInput="305px"
                type="number"
                name="phone"
                placeholder="(XX) XXXXX-XXXX"
                value={contactState.phone}
                onChange={onPhoneChange}
              />
            </LabelTitle>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <LabelTitle>
              <MsgArea
                type="text"
                name="message"
                placeholder="digite aqui sua mensagem"
                value={contactState.message}
                onChange={onMessageChange}
              />
            </LabelTitle>
            <Button type="submit">ENVIAR</Button>
          </Form>
        </FormContainer>
      </ContactContainer>
    </div>
  )
}
