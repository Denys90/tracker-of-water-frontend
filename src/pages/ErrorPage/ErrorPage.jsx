import { Container, Title, Error, Description } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Error>Page not found</Error>
      <Description>
        Perhaps it was, but it disappeared due to catastrophically rapid
        compression under the influence of gravitational forces. But this is not
        yet certain.
      </Description>
    </Container>
  );
};

export default ErrorPage;
