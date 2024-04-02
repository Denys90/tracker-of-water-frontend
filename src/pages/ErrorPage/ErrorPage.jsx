import { Container, Title, Error, Plit } from './ErrorPage.styled';
import water from 'assets/images/water.png';

const ErrorPage = () => {
  return (
    <Container>
      <Plit src={water} alt="water" width="100" />
      <Title>404</Title>
      <Error>Page not found</Error>
    </Container>
  );
};

export default ErrorPage;
