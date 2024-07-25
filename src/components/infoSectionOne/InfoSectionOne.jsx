import styled from "styled-components"
import sectionOneImage from "../../images/section1.png"

const Container = styled.div`
    padding: 10px 20px;
    margin-top: 4%;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 5%;
    
`;
const Header = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.primary};
`;
const Title = styled.div`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    margin-bottom: 10px;
`;
const Description= styled.p`
    width: 85%;
    color: ${(props) => props.theme.colors.textDark};
`;

const RigthImgBox = styled.div`
    width:35%;
    margin-left: 5%;
   
`;
const Image = styled.img`
    width: 100%;
    
`;
const LeftInfoBox = styled.div`
    width: 55%;
    margin-right: 5%;
   
`;

const List = styled.ul`
    width: 70%;
    margin-left: 10%;
    margin-top: 3%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const ListItem = styled.li`
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.bgDefault};
    border-left: 5px solid ${(props) => props.theme.colors.primary};
    min-width: 300px;
    text-align: left;
    padding: 20px 20px;
    -webkit-box-shadow: 4px 5px 17px -7px #dad0d0; 
    box-shadow: 4px 5px 17px -7px #a8a4a4;
`;
export default function InfoSectionOne() {
  return (
    <Container>
      <Wrapper>
      <RigthImgBox>
            <Image src={sectionOneImage}/>
        </RigthImgBox>
        <LeftInfoBox>
            <Title>Why Choose Us?</Title>
            <Header>IT lifecicle management all in one place</Header>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam quam itaque reiciendis, ipsa non assumenda eaque aut sunt quibusdam incidunt. Iusto delectus expedita at. Qui error sunt temporibus distinctio.
            </Description>
            <List>
                <ListItem>Transparent advice</ListItem>
                <ListItem>Volume bundling</ListItem>
                <ListItem>Global IT sourcing</ListItem>
                <ListItem>International deliveries</ListItem>
                <ListItem>Software refuelling</ListItem>
                <ListItem>Natiowide service network</ListItem>
            </List>
        </LeftInfoBox>
      </Wrapper>
    </Container>
  )
}
