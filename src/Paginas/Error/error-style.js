import styled from "styled-components";

export const Section = styled.section`
  clear: both;
  width: 100vw;
  height: 69.1vh;
  background-color: #FFC972;
`;

export const Sheet = styled.div`
  clear: both;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Image = styled.img`
  width: 30vw;
  height: 50vh;
`;

export const Paragraph = styled.p`
  color: #333;
`;

export const A = styled.a`
  text-decoration: none;
  background-color: #FFB03B;
  &:hover{
    background-color:#FED659;
  }
`;
