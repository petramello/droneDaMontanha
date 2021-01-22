import React from 'react'

import BoxCard from '../BoxCard'
import { HomeBannerContainer, HomeBannerH3 } from './styled'

const HomeBanner = () => (
  <HomeBannerContainer>
    <HomeBannerH3>SAMUEL OSCAR</HomeBannerH3>
    <BoxCard buttonColor="black" link="/sobre">
      O QUE FAÇO
    </BoxCard>
  </HomeBannerContainer>
)
export default HomeBanner
