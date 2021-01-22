import React from 'react'
import { NavigationItemContainer, NavigationItemLink } from './styled'

const NavigationItem = props => (
  <NavigationItemContainer>
    <NavigationItemLink to={props.link} exact={props.exact}>
      {props.children}
    </NavigationItemLink>
  </NavigationItemContainer>
)
export default NavigationItem
