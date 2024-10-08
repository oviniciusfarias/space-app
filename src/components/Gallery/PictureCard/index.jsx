import styled from "styled-components"
import IconButton from "../../IconButton"

const FigureStyled = styled.figure`
  width: ${(props) => (props.$expandida ? '90%' : 'calc(50% - 12px)')};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  & > img {
    max-width: 100%;
    /* border-radius: 20px 20px 0 0; */
  }
  figcaption {
    background-color: #001634;
    /* border-radius: 0px 0px 20px 20px; */
    color: white;
    box-sizing: border-box;
    padding: 12px;
    footer {
      display: flex;
    }
    h3 {
      font-family: 'Ghandi Sans';
      font-weight: 800;
      font-size: 20px;
      flex-grow: 1;
    }
    h4 {
      font-size: 16px;
      font-weight: 400;
      flex-grow: 1;
    }
    h3, 
    h4 {
      font-family: 'Ghandi Sans';
      margin: 0;
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin-left: 24px;
    }
  }
`

const PictureCard = ({ picture, handleZoom, expanded = false, handleFavorite }) => {

  const favoriteIcon = picture.favorite ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

  return (
    <FigureStyled $expanded={expanded} id={`foto-${picture.id}`}>
      <img src={picture.path} alt={picture.titulo} />
      <figcaption>
        <h3>{picture.titulo}</h3>
        <footer>
          <h4>{picture.fonte}</h4>
          <IconButton title="Favoritar imagem" onClick={() => handleFavorite(picture)}>
            <img src={favoriteIcon} alt="Favoritar imagem" />
          </IconButton>
          {
            !expanded && <button title="Expandir imagem" onClick={() => handleZoom(picture)} aria-hidden={expanded}>
              <img src='/icones/expandir.png' alt="Expandir imagem imagem" />
            </button>
          }
        </footer>
      </figcaption>
    </FigureStyled>
  )
}

export default PictureCard