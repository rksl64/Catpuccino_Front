import React from "react";
import {FooterWrapper,Container,Copyright,Credits,Heading,Link,Paragraph,SocialLinks} from '../Footer/footer-style';

function Footer() {
  return (
    <>
      <FooterWrapper id="footer">
        <Container>
          <Heading>Delicious</Heading>
          <Paragraph>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </Paragraph>
          <SocialLinks className="social-links">
            <Link href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </Link>
            <Link href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </Link>
            <Link href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </Link>
          </SocialLinks>
          <Copyright>
            &copy; Copyright{" "}
            <strong>
              <span>Delicious</span>
            </strong>
            . All Rights Reserved
          </Copyright>
          <Credits>
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </Credits>
        </Container>
      </FooterWrapper>
    </>
  );
}

export default Footer;
