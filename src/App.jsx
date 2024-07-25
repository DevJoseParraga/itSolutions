import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import InfoBoxes from './components/infoBoxes/InfoBoxes';
import InfoSectionOne from './components/infoSectionOne/InfoSectionOne';
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
const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "balck",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary:"darkBlue",
    bgLight:"aliceBlue"
  },
}
export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Container>
          <Navbar/>
          <Hero/>
          <InfoBoxes/>
          <InfoSectionOne/>
        </Container> 
    </ThemeProvider>
  )
}