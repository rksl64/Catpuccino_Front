import styled, { keyframes } from "styled-components";
import testimonials from "../../assets/img/testimonials-bg.jpg";

export const Div = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    height: 100%;
    padding: 20px;
  }
`;

export const BackgroundOverlay = styled.div`
  background-image: url(${testimonials});
  background-size: cover;
  z-index: -2;
  position: absolute;
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
  @media (max-width: 1000px) {
    width: 95vw;
    height: 80%;
    padding: 15px;
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

export const PageLink = styled.p`
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
  text-decoration-color: #747474;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const PageLinkLabel = styled.span`
  cursor: pointer;
  font-size: 9px;
  font-weight: 700;
  color: #ffb03b;
  &:hover {
    color: white;
  }
`;

export const FormBtn = styled.button`
  border-radius: 355px 45px 225px 75px/15px 225px 15px 255px;
  background-color: #ce796b;
  border: none;
  padding: 0.7rem 2.5rem;
  margin-top: 1rem;
  color: white;
  transition: background-color 1s ease;

  &:hover {
    background-color: #e7ad99;
  }
`;

export const SignUpLabel = styled.p`
  margin: 0;
  margin-top: 1em;
  font-size: 13px;
  color: white;
`;

export const SignUpLink = styled.span`
  margin-left: 1px;
  font-size: 14px;
  text-decoration-color: #747474;
  color: #d36655;
  cursor: pointer;
  font-weight: 800;
  &:hover {
    color: white;
  }
`;

export const A = styled.a`
  color: #d36655;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ImagenFondo = styled.img`
  height: 85vh;
  width: 40vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DivFormu = styled.div`
  background-color: #262626;
  height: 85vh;
  width: 55vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 90vw;
    height: auto;
  }
`;

export const DivImagen = styled.div`
  background-color: #262626;
  height: 85vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ImagenCat = styled.img`
  height: 40vh;
  width: 25vw;
  margin-left: -5em;
  position: absolute;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TEXT = styled.h2`
  width: 20vw;
  font-size: 20px;
  position: absolute;
  bottom: 0;
  margin-bottom: 4em;
  font-family: "Manrope", sans-serif;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Logito = styled.img`
  height: 12vh;
  width: 8vw;
  margin-left: -1em;
  border-radius: 50%;
  @media (max-width: 1000px) {
    width: 20vw;
    height: auto;
    margin-left: 0;
    border-radius: 50%;
  }
`;

export const DivScroll = styled.div`
  height: 50vh;
  width: 25vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 0.5em;
  @media (max-width: 1000px) {
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
