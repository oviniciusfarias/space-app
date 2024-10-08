import styled from "styled-components"
import searchIcon from './search.png'

const TextFieldContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`

const TextFieldStyled = styled.input`
  border-radius: 10px;
  padding: 18px 16px;
  background-color: transparent;
  color: #D9D9D9;
  border: 2px solid #C98CF1;
  height: 56px;
  width: 566px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #D9D9D9;
  }
`

const TextFieldIconStyled = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`

const TextField = ({ type, handleFilter, filter }) => {
  return (
    <TextFieldContainerStyled>
      <TextFieldStyled 
        placeholder="O que você procura?" 
        type={type}
        onChange={(event) => {handleFilter(event.target.value)}}
        value={filter}
      />

      <TextFieldIconStyled src={searchIcon} alt="Ícone de lupa" />

    </TextFieldContainerStyled>
    
  )
}

export default TextField