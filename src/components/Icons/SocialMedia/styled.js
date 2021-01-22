import styled from 'styled-components'

export const IconsContainer = styled.ul`
  display: flex;
  font-size: 1em;
  height: 15px;
  width: 100%;
  margin-bottom: 7px;
`

export const IconContainer = styled.div`
  margin: 0 8px;
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
