import styled from 'styled-components'
import blueBrushBackgroung from '../../assets/imgContact/7-blue-watercolor-banner-3.jpg'

export const ContactContainer = styled.section`
  font-family: 'NexaLight', sans-serif;
  font-size: 0.9em;
  color: #0f1011;
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 30px;
  display: inline-flex;
  overflow: hidden;
`
export const ContactDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;
`

export const Contacts = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 8px;
  padding-top: 8px;
  position: relative;
  display: inline;
  background-image: url(${blueBrushBackgroung});
  background-size: contain;
`

export const ContactLink = styled.a`
  margin-top: 30px;
  margin-bottom: 0;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-weight: bold;
  text-decoration: none;
  color: #0f1011;
  &:active {
    text-decoration: none;
    color: whitesmoke;
  }
  &:hover {
    text-decoration: none;
    color: whitesmoke;
  }
`

export const FormContainer = styled.div`
  display: block;
  width: 100%;
  text-align: left;
  margin-left: 3%;
`

export const Form = styled.form`
  position: relative;
  display: inline-block;
  font-size: 0.8em;
  margin-left: 8%;
`

export const ContactTitle = styled.h2`
  margin: 50px 5px 30px 0;
  font-family: 'NexaRegular', serif;
`

export const LabelTitle = styled.label`
  display: inline-block;
  padding: 0 10px;
  margin: 2%;
  width: 100%;
`

export const Input = styled.input`
  width: ${props => props.widthInput || '317px'};
  margin-left: 10px;
  font-family: 'NexaLight', sans-serif;
`

export const MsgArea = styled.textarea`
  width: 72%;
  height: 100px;
  font-family: 'NexaLight', sans-serif;
`

export const Button = styled.button`
  height: 30px;
  width: 80px;
  font-family: 'NexaLight', sans-serif;
  border-radius: 5%;
  font-weight: bolder;
  font-size: 0.9em;
  letter-spacing: 1px;
  color: white;
  border: none;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: inline-flex;
  background-color: #16697aff;
  opacity: 90%;
  margin-left: 300px;

  &:hover {
    color: #ffa62bff !important;
    text-decoration: underline;
    opacity: 100%;
  }
`
