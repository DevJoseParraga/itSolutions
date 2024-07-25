import styled from "styled-components"
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.div`
    color:${(props) => props.theme.colors.secondary};
`;
const SubTitle = styled.div`
    font-weight: bold;
    font-size: 50px;
    margin: 5px;
    color: ${(props) => props.theme.colors.primary};
`;
export default function TextBanner( { title, subTitle } ) {
  return (
    <>
      <Container>
        <Title>{title}</Title> 
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    </>
  )
}

TextBanner.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};