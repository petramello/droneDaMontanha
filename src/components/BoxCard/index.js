import React from 'react'

import { BoxCardButton, BoxCardLink } from './styled'

const BoxCard = ({ buttonColor, link, exact, children }) => {
  return (
    <BoxCardButton buttonColor={buttonColor}>
      <BoxCardLink to={link} exact={exact}>
        {children}
      </BoxCardLink>
    </BoxCardButton>
  )
}

export default BoxCard
