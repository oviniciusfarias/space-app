import styled from "styled-components"
import SectionTitle from "../../SectionTitle"

import popularPictures from './popular-pictures.json'

const ImgStyled = styled.img`
  max-width: 212px;
  border-radius: 20px;
`

const ColumnPicturesStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonStyled = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #C98CF1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`



const PopularGallery = () => {
  return (
    <div>
      <SectionTitle $textAlign='center'>Populares</SectionTitle>

      <ColumnPicturesStyled>
        {popularPictures.map(picture => {
          return <ImgStyled key={picture.id} src={picture.path} alt={picture.alt}/>
        })}
      </ColumnPicturesStyled>
      <ButtonStyled>Ver mais</ButtonStyled>
    </div>

  )
}

export default PopularGallery