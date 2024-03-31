import { FooterContainer } from './Footer.styled';

export function Footer() {
  return (
    <>
      {' '}
      <FooterContainer>
        <div>
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <p>&copy;2024 | Developed with 🤍 by GoIT Students</p>
      </FooterContainer>
    </>
  );
}
