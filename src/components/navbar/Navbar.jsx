import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.bgdefault};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LeftLogo = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
`;
const CenterMenu = styled.div`
`;
const RighBtn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;
const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.colors.primary};
  }
`;
const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  border: 2px solid white;
  cursor: pointer;
  color: ${(props) => props.theme.colors.bgDefault};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover{
    background-color: ${(props) => props.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid darkblue;
  }
`;

export default function Navbar() {
  return (
    <>
      <Container>
        <LeftLogo>
          <Logo>
            IT Solutions
          </Logo>
        </LeftLogo>
        <CenterMenu>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About us</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Blog</MenuItem>
          </Menu>
        </CenterMenu>
        <RighBtn>
          <Button>Call Us Now!</Button>
        </RighBtn>
      </Container>
    </>
  )
}

