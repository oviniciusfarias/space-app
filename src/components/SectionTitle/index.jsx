import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #7B78E5;
  text-align: ${props => props.$textAlign ? props.$textAlign : 'left'};
`

export default SectionTitle