import styled from "styled-components";
import * as palette from '../../variables/Variables';



export const InfoContainer = styled.div`
  color: white;
  background: ${({lightBg}) => (lightBg ? 'white' : 'black')};


  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* padding: 0 25px; */
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
 

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  padding: 0 32px;
  margin-bottom: 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  padding: 0 32px;
  margin-bottom: 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  padding-bottom: 3.5rem;
`

export const TopLine = styled.p`
  color: ${palette.mainColor};
  font-size: 1rem;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? 'white' : '#383333')};

  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 2.1rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: ${({darkText}) => (darkText ? 'black' : '#dadada')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
`

