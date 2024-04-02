import { FooterContainer, Wave } from './Footer.styled';

export function Footer() {
  return (
    <>
      {' '}
      <FooterContainer>
        <div>
          <Wave id="wave1"></Wave>
          <Wave id="wave2"></Wave>
          <Wave id="wave3"></Wave>
          <Wave id="wave4"></Wave>
        </div>

        <p>&copy;2024 | Developed with 🤍 by GoIT Students</p>
      </FooterContainer>
    </>
  );
}
