import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { GiFilmProjector } from 'react-icons/gi'
import Banner from '../../components/Banner'
import bannerFotos from '../../assets/imgCovers/picoDosMarinsNoiteLuaCheia.jpg'
import { GalleryContainer } from './styled'
import { PortIconContainer, PortLink } from '../Portfolio/styled'
import { photos } from './photos'

export default function PhotosGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Banner imgBack={bannerFotos} subtitle="@dronedamontanha">
        FOTOGRAFIAS
      </Banner>

      <PortIconContainer>
        <PortLink to="/galeriadevideos">
          <GiFilmProjector />
          Videos
        </PortLink>
      </PortIconContainer>

      <GalleryContainer>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(midias => ({
                  ...midias,
                  srcset: midias.src,
                  caption: midias.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </GalleryContainer>
    </div>
  )
}
