import styled from 'styled-components'

export const IconsContainer = styled.ul`
  display: flex;
  font-size: 1.1em;
  height: 15px;
  width: 100%;
  margin-bottom: 7px;

  @media (max-width: 399px) {
    margin-left: -20px;
  }
`

export const IconContainer = styled.div`
  margin: 0 8px;

  @media (max-width: 399px) {
    margin: 0 10px;
  }
`

export const IconLink = styled.a`
  text-decoration: none;
  color: ${props => props.iconColor || 'white'};

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.iconHoverColor || '#489fb5ff'};
    text-decoration: none;
  }
`
