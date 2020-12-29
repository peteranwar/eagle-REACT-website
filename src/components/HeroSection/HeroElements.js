import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward  } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  position: relative;
  z-index: 1;
  height: 700px;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background-color: green;
`

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroHeader = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.3rem;
  }
`

export const HeroPara = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 450px) {
    font-size: .9rem;
  }
`

export const HeroBtnContainer = styled.div`
  color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

export const ArrowForward = styled(MdArrowForward)`
  font-size: 1.5rem;
  margin-left: .5rem;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 1.3rem;
  margin-left: .5rem;
`