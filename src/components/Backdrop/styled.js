import styled from 'styled-components'

export const BackdropContainer = () => styled.nav`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 40%;
  border: 1px solid #ccc;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 400px) {
    display: none;
  }
  @media (max-width: 399px) {
    display: flex;
  }
`
