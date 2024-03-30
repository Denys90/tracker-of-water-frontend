import { Container, Title, Error, Plit } from './ErrorPage.styled';
import water from '../../assets/images/water.png';

const ErrorPage = () => {
  return (
    <Container>
      <Plit src={water} alt="water" width="100" />
      <Title>404</Title>
      <Error>Page not found</Error>
      {/* <Description>
        Perhaps it was, but it disappeared due to catastrophically rapid
        compression under the influence of gravitational forces. But this is not
        yet certain.
      </Description> */}
    </Container>
  );
};

export default ErrorPage;
