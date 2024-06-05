import styled, { keyframes } from "styled-components";
import testimonials from "../../assets/img/testimonials-bg.jpg";

export const Div = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BackgroundOverlay = styled.div`
  background-image: url(${testimonials});
  background-size: cover;
  z-index: -2;
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
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;

  @media (max-width: 1000px) {
    width: 60vw;
    height: 50vh;
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    width: 80vw;
    height: 40vh;
    padding: 10px 15px;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-family: "Quicksand", sans-serif !important;
  margin: 10px 0 30px 0;
  font-size: 60px;
  font-weight: 800;

  @media (max-width: 1000px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -2em;

  @media (max-width: 100px) {
    height: 60%;
    margin-top: -2em;
  }

  @media (max-width: 480px) {
    height: 50%;
    margin-top: -2em;
  }
`;

export const PageLink = styled.p`
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
  text-decoration-color: #747474;
`;

export const PageLinkLabel = styled.span`
  cursor: pointer;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
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
  font-family: "Quicksand", sans-serif !important;

  &:hover {
    background-color: #e7ad99;
  }
`;

export const SignUpLabel = styled.p`
  margin: 0;
  font-size: 15px;
  color: white;
  font-family: "Manrope", sans-serif;
`;

export const SignUpLink = styled.span`
  margin-left: 1px;
  font-size: 14px;
  text-decoration-color: #747474;
  color: #d36655;
  cursor: pointer;
  font-weight: 800;
  font-family: "Manrope", sans-serif;
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
export const TILT = styled.a`
  color: white;
  text-decoration: none;
`;
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Imagen = styled.img`
  height: 6.5vh;
  width: 3.5vw;
  margin-right: 0.5em;
`;

export const ToastDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
