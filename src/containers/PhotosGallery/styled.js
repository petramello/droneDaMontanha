import styled from 'styled-components'

export const GalleryContainer = styled.div`
  height: 100%;
  margin: ${props => props.marginGalleryContainer || '40px 140px'};

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 1824px) {
    margin: 100px 160px;
  }
\`
`
