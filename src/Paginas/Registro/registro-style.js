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
`;

export const Form = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 9px;
  font-weight: 700;
  color: #ffb03b;
  &:hover {
    color: white;
  }
`;

export const FormBtn = styled.button`
  padding: 10px 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: #ffb03b;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:active {
    box-shadow: none;
  }
`;

export const SignUpLabel = styled.p`
  margin: 0;
  font-size: 10px;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const SignUpLink = styled.span`
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: #747474;
  color: #ffb03b;
  cursor: pointer;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  &:hover {
    color: white;
  }
`;
export const A = styled.a`
  color: #ffb03b;

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
  width: 45vw;
`;
export const DivFormu = styled.div`
  background-color: #262626;
  height: 85vh;
  width: 55vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const DivImagen = styled.div`
  background-color: #262626;
  height: 85vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImagenCat = styled.img`
  height: 30vh;
  width: 15vw;
  margin-left:-3em;
  position: absolute;
`;
export const TEXT = styled.h2`
  width: 20vw;
  font-size:20px;
  position: absolute;
  bottom:0;
  margin-bottom: 4em;
`;
export const Logito = styled.img`
  height: 10vh;
  width: 7vw;
  border-radius:40%;
`;
export const DivScroll = styled.div`
  height: 50vh;
  width: 25vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;