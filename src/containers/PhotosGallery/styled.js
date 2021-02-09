import styled from 'styled-components'

export const GalleryContainer = styled.div`
  margin: ${props => props.marginGalleryContainer || '40px 125px'};

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 0;
    padding: 0;
  }
`
