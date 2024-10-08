import { styled } from "styled-components"
import NavItem from "./NavItem"

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`

const AsideBar = () => {
  return (
    <aside>
      <nav>
        <ListStyled>
            <NavItem 
              activeIcon="/icones/home-ativo.png" 
              inactiveIcon="/icones/home-inativo.png" 
              active 
            >
              Início
            </NavItem>
            <NavItem 
              activeIcon="/icones/mais-vistas-ativo.png" 
              inactiveIcon="/icones/mais-vistas-inativo.png" 
            >
              Mais vistas
            </NavItem>
            <NavItem 
              activeIcon="/icones/mais-curtidas-ativo.png" 
              inactiveIcon="/icones/mais-curtidas-inativo.png" 
            >
              Mais curtidas
            </NavItem>
            <NavItem 
              activeIcon="/icones/novas-ativo.png" 
              inactiveIcon="/icones/novas-inativo.png" 
            >
              Novas
            </NavItem>
            <NavItem 
              activeIcon="/icones/surpreenda-me-ativo.png" 
              inactiveIcon="/icones/surpreenda-me-inativo.png" 
              to="#"
            >
              Surpreenda-me
            </NavItem>
        </ListStyled>
      </nav>
    </aside>
  )
}

export default AsideBar