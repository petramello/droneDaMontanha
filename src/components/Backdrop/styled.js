import styled from 'styled-components'

export const BackdropContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: 25%;
  width: 100%;
  height: 150px;
  margin: 0;
  padding: 50px 10px 15px 10px;
  overflow-y: visible !important;
  background-color: deepskyblue;
  box-sizing: border-box;
  opacity: 80%;
  transition: transform 0.3s ease-in-out;
  font-size: 0.7em;
  line-height: 2.5em;
  text-align: left;
  cursor: pointer;
  z-index: 9999 !important;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};

  div {
    height: 400px;
  }

  @media (min-width: 400px) {
    display: none;
  }
`
