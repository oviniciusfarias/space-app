import styled from "styled-components"
import PictureCard from "../Gallery/PictureCard"
import IconButton from "../IconButton"

const DialogOverlayStyled = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const DialogStyled = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`

const ModalZoom = ({ picture, handleModalClose, handleFavorite }) => {
  
  return (
    picture ? 
      <>
        <DialogOverlayStyled />
        <DialogStyled open={!!picture} id="modalZoom" onClose={handleModalClose}>
          
          <PictureCard 
            picture={picture} 
            expanded={true} 
            handleFavorite={handleFavorite}
          />

          <form method="dialog">
            <IconButton formMethod="dialog">
              <img src="/icones/fechar.png" alt="Icone de fechar" />
            </IconButton>
          </form>
        </DialogStyled>
      </>
    : ''
  )
}

export default ModalZoom