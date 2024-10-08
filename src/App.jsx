import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import AsideBar from "./components/AsideBar"
import Banner from "./components/Banner"

import BannerBackgroundImage from './assets/banner.png'
import Gallery from "./components/Gallery"

import Pictures from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Rodape from "./components/Footer"

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`

const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`

const ContentWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const App = () => {

  const [galleryPictures, setGalleryPictures] = useState(Pictures)
  const [selectedPicture, setselectedPicture] = useState(null)
  const [filter, setFilter] = useState('')
  const [selectedTag, setSelectedTag] = useState(0)

  useEffect(() => {
    const filteredPictures = Pictures.filter(picture => {
      console.log('filtrando tags', selectedTag)
      const filterPerTag = !selectedTag || picture.tagId === selectedTag;
      const filterPerTitle = !filter || picture.titulo.toLowerCase().includes(filter.toLowerCase())

      return filterPerTag && filterPerTitle
    })

    setGalleryPictures(filteredPictures)

  }, [filter, selectedTag])
  
  const handleFavorite = (picture) => {
    if (picture.id === selectedPicture?.id) {
      setselectedPicture({
        ...selectedPicture,
        favorite: !selectedPicture.favorite
      })
    }

    setGalleryPictures(galleryPictures.map(galleryPicture => {
      return {
        ...galleryPicture,
        favorite: Number(galleryPicture.id) === Number(picture.id) ? !picture.favorite : galleryPicture.favorite
      }
    }))
  }

  return (
    <BackgroundGradient>
      <GlobalStyles />

      <AppContainer>
        <Header 
          filter={filter}
          handleFilter={setFilter} 
        />

        <MainContainer>
          <AsideBar />

          <ContentWrapper>
            <Banner 
              title="A galeria mais completa de fotos do espaço!"
              backgroundImage={BannerBackgroundImage} />


            <Gallery 
              pictures={galleryPictures} 
              handleSelectedPicture={picture => setselectedPicture(picture)} 
              handleFavorite={handleFavorite}
              handleFilterPerTag={setSelectedTag}
              selectedTag={selectedTag}
            />
          </ContentWrapper>
        </MainContainer>
      </AppContainer>

      <ModalZoom 
        picture={selectedPicture} 
        handleModalClose={() => setselectedPicture(null)}
        handleFavorite={handleFavorite}
      />

      <Rodape />
    </BackgroundGradient>
  )
}

export default App
