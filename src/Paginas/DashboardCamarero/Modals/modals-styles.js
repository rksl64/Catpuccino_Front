import styled, { keyframes } from "styled-components";

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

export const DivFormu = styled.div`
  background-color: #fff;
  height: 60vh;
  width: 38vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow:hidden;
  @media (max-width: 1000px) {
    width: 90vw;
    height: auto;
  }
`;
export const Logito = styled.img`
  height: 16vh;
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
  height: 30vh;
  width: 26vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 0.5em;
  @media (max-width: 1000px) {
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
