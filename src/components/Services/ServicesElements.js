import styled from "styled-components";

export const ServicesContainer = styled.div`
  padding-bottom: 7rem;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 100%;
  max-width: 220px;
  /* justify-content: flex-start; */
  background-color: white;
  max-height: 350px;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-15px) scale(1.04);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const ServicesImg = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 0.8rem;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
