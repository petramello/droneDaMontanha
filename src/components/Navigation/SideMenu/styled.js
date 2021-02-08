import styled from 'styled-components'

export const SideMenuContainer = styled.div`
  position: absolute;
  width: 100px;
  font-size: 0.9em;
  height: 55px;
  padding-top: 15px;
  z-index: 1000;
  box-sizing: border-box;
  left: 30%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (min-width: 399px) {
    display: none;
  }
`

export const SideBarMenu = styled.div`
  width: 40px;
  height: 3px;
  margin: 5px;
  border-radius: 20%;
  background-color: ${({ open }) => (open ? 'black' : 'whitesmoke')};
  z-index: 1000;
  left: 10%;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 399px) {
    display: none;
  }
`
