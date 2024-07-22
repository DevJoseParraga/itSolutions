import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
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
  color: darkblue;
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
  color: gray;
  cursor: pointer;
  &:hover{
    color: darkblue;
  }
`;
const Button = styled.button`
  font-weight: bold;
  background-color: darkblue;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover{
    background-color: aliceblue;
    color: darkblue;
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

