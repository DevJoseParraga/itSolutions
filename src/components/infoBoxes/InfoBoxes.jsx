import styled from "styled-components";
import TextBanner from "../textBanner/TextBanner";
import { Button, Card, CardContent, Cardtitle, Description } from "../styles/styled.Card";

const Container = styled.div`
    width: 80%;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-left: 10%;
   gap: 2rem;
   margin-top: 2%;
`

export default function InfoBoxes() {
  return (
    <>
        <TextBanner title={"What we Provid"} subTitle={"Our Services"}/>
        <Container>
          <Card>
            <CardContent>
              <Cardtitle>Title</Cardtitle>
              <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt officia repellendus ex dolorum incidunt id natus saepe unde animi aliquid exercitationem labore, ipsam odit illum iste non modi voluptatibus.
              </Description>
              <Button>Read More...</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Cardtitle>Title2</Cardtitle>
              <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt officia repellendus ex dolorum incidunt id natus saepe unde animi aliquid exercitationem labore, ipsam odit illum iste non modi voluptatibus.
              </Description>
              <Button>Read More...</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Cardtitle>Title3</Cardtitle>
              <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt officia repellendus ex dolorum incidunt id natus saepe unde animi aliquid exercitationem labore, ipsam odit illum iste non modi voluptatibus.
              </Description>
              <Button>Read More...</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Cardtitle>Title4</Cardtitle>
              <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt officia repellendus ex dolorum incidunt id natus saepe unde animi aliquid exercitationem labore, ipsam odit illum iste non modi voluptatibus.
              </Description>
              <Button>Read More...</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Cardtitle>Title5</Cardtitle>
              <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt officia repellendus ex dolorum incidunt id natus saepe unde animi aliquid exercitationem labore, ipsam odit illum iste non modi voluptatibus.
              </Description>
              <Button>Read More...</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Cardtitle>Title6</Cardtitle>
              <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt officia repellendus ex dolorum incidunt id natus saepe unde animi aliquid exercitationem labore, ipsam odit illum iste non modi voluptatibus.
              </Description>
              <Button>Read More...</Button>
            </CardContent>
          </Card>
        </Container>
    </>
  )
}
