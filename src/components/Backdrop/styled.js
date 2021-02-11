import styled from 'styled-components'

export const BackdropContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 35px;
  left: 75%;
  width: 110px;
  height: 100px;
  margin: 0;
  padding: 20px 10px 15px 10px;
  background-color: deepskyblue;
  transition: transform 0.3s ease-in-out;
  font-size: 0.7em;
  line-height: 2.5em;
  text-align: center !important;
  cursor: pointer;
  transform: ${({ open }) => (open ? 'translateX(-5%)' : 'translateX(100%)')};
  overflow: visible !important;
  z-index: 9999 !important;

  @media (min-width: 481px) {
    display: none;
  }
`
