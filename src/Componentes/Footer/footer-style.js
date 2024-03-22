import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #f8f8f8;
  color: #555;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
`;

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

const SocialLinks = styled.div`
  margin-bottom: 40px;
`;

const Link = styled.a`
  font-size: 24px;
  margin-right: 10px;
  color: #555;

  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.div`
  margin-bottom: 5px;
`;

const Credits = styled.div`
  font-size: 12px;
  color: #888;
`;

export {FooterWrapper,Container,Copyright,Credits,Heading,Link,Paragraph,SocialLinks}