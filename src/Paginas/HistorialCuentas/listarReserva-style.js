import styled, { keyframes } from "styled-components";

export const TopBanner = styled.section`
background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 13rem;
    width: auto;
    color: #fff;
    display: flex;
    justify-content: center; 
    align-items: center;  
`;
export const FilterButton = styled.button`
    background-color: ${({ active }) => (active ? '#ECC8AF' : '')};
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border-radius: 25% 25% 25% 25% / 55% 0% 55% 0%;
    cursor: pointer;
    &:hover {
        background-color: ${({ active }) => (active ? '#ECC8AF' : '')};
    }
`;