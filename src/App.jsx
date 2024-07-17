import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/navbar/Navbar';
// import { ThemeProvider } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body{
  *{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-family: "Roboto", sans-serif;
  }
}
`;


const Container = styled.div`
height: 100vh;
`;
export default function App() {
  return (
    <>
        <GlobalStyles/>
        <Container>
        <Navbar/>
        </Container> 
    </>
  )
}