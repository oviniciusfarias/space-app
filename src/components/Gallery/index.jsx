import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import GalleryTags from "./Tags"
import PopularGallery from "./PopularGallery"
import PictureCard from "./PictureCard"

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`

const FluidSection = styled.section`
  flex-grow: 1;
`

const GalleryPicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  figure {
    flex-grow: 1;
    box-shadow: 0px 8px 13px -5px rgba(0, 0, 0, 0.3);
  }
`

const Gallery = ({ pictures = [], handleSelectedPicture, handleFavorite, handleFilterPerTag, selectedTag }) => {
  return (
    <>
      <GalleryTags handleFilterPerTag={handleFilterPerTag} selectedTag={selectedTag} />

      <GalleryContainer>
        <FluidSection>
          <SectionTitle>Navegue pela galeria</SectionTitle>

          <GalleryPicsContainer>
            {pictures.map(pic => {
              return (
                <PictureCard 
                  handleZoom={handleSelectedPicture}
                  handleFavorite={handleFavorite}
                  key={pic.id} 
                  picture={pic} 
                />
              )
            })}
          </GalleryPicsContainer>
        </FluidSection>
        <PopularGallery />
      </GalleryContainer>
    </>
  )
}

export default Gallery