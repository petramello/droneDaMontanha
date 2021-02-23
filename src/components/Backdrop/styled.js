import styled from 'styled-components'

export const BackdropContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 35px;
  left: 75%;
  width: 150px;
  height: 100px;
  margin: 0;
  padding: 5px 5px 15px 8px;
  background-color: deepskyblue;
  opacity: 99%;
  box-shadow: 0px 0px 10px 5px deepskyblue;
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
