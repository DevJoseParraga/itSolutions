import styled from "styled-components"
import heroImg from "../../images/hero.png"
const Container = styled.div`
    width: 100%;
    display: flex;
    height: 90%;
`;

const Left = styled.div`    
    width: 55%;
    margin-left: 5%;
    background-color: ${(props) => props.theme.colors.bgDefault};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Right = styled.div`
    width: 35%;
    margin-right: 5%;
    background-color: ${(props) => props.theme.colors.bgDefault};
    display: flex;
    align-items: center;
`;
const Title = styled.h1`
    width: 60%;
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
`;
const Description = styled.p`
    width: 70%;
    font-size: 20px;
    color: ${(props) => props.theme.colors.textDark};
    margin-top: 3%;
`;
const Image = styled.img`
    width: 500px;
`;
const BtnContainer = styled.div`
    display: flex;
    margin-top: 3%;
    gap: 1rem;
  `;
const Btn = styled.button`
    font-weight: bold;
    color: ${(props) => props.theme.colors.bgDefault};
    background-color: ${(props) => props.theme.colors.bPrimary};
    padding: 15px 30px;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 10px;
    background: linear-gradient(to right, ${(props) => props.theme.colors.bgLight} 50%, ${(props) => props.theme.colors.bgPrimary} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    &:hover{
        color: ${(props) => props.theme.colors.primary};
        border: 2 px solid ${(props) => props.theme.colors.primary};
        background-position: left bottom;
        cursor: pointer;
    }

`;
export default function Hero() {
  return (
    <>
      <Container>
        <Left>
            <Title>
                IT-Management - IT Support and IT-Services for everyone!
            </Title>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed officia saepe quasi esse rem neque odio? Amet, eligendi voluptates earum quis quia ducimus dolore sint, mollitia dolor sed eos?
            </Description>
            <BtnContainer>
                <Btn>About US</Btn>
                <Btn>Contact Us</Btn>
            </BtnContainer>
        </Left>
        <Right>
            <Image src={heroImg} />
        </Right>
      </Container>
    </>
  )
}
