import styled from "styled-components"
import TextField from "../TextField"


const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
    max-width: 212px;
  }
`

const Header = ({ filter,  handleFilter}) => {
  return (
    <HeaderStyled>
      <img src="/imagens/logo.png" alt="" />

      <TextField 
        type="text"
        handleFilter={handleFilter}
        filter={filter}
      />
    </HeaderStyled>
  )
}

export default Header