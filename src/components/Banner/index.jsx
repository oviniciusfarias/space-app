import styled from "styled-components"

const BannerWrapperStyled = styled.div`
  background-image: ${props => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0 0 32px;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`

const TitleStyled = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  max-width: 430px;
  padding: 0 64px;
`

const Banner = ({ title, backgroundImage }) => {
  return (
    <BannerWrapperStyled $backgroundImage={backgroundImage}>
      <TitleStyled>
        {title}
      </TitleStyled>
    </BannerWrapperStyled>
  )
}

export default Banner