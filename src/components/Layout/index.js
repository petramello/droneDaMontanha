import React from 'react'

import Toolbar from '../Navigation/Toolbar'
import { MainContainer } from './styled'
import Footer from '../Footer'

const Layout = props => {
  return (
    <MainContainer>
      <Toolbar />
      <main>{props.children}</main>
      <Footer />
    </MainContainer>
  )
}
export default Layout
