import styled, { keyframes } from "styled-components";
import testimonials from "../../assets/img/testimonials-bg.jpg";

export const FormBtn = styled.button`
  border-radius: 355px 45px 225px 75px/15px 225px 15px 255px;
  background-color: #ce796b;
  border: none;
  padding: 0.7rem 2.5rem;
  margin-top: 3em;
  color: white;
  transition: background-color 1s ease;

  &:hover {
    background-color: #e7ad99;
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
  width: 60vw;
  height: 70vh;
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
export const DivFormu = styled.div`
  background-color: #262626;
  height: 65vh;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 90vw;
    height: auto;
  }
`;
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
export const P = styled.p`
  color:#CE796B;
  margin-bottom: 3em;
`;