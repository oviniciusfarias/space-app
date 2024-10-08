import styled from "styled-components"

const ListItemkStyled = styled.li`
  color: ${props => props.$active ? '#7b78e5' : '#d9d9d9'};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 30px;
  font-weight: ${props => props.$active ? '800' : '400'};
`

const NavItem = ({ 
    activeIcon, 
    inactiveIcon, 
    children, 
    active = false
  }) => {
  
  return (
    <ListItemkStyled $active={active}>
      <img src={active ? activeIcon : inactiveIcon} />
      {children}
    </ListItemkStyled>
  )
}

export default NavItem