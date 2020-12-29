import styled from "styled-components";
import { Link } from "react-router-dom";
import * as palette from '../../variables/Variables';


export const Container = styled.section`
  position: fixed;
  bottom: 0;
  left: 0 ;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background-color: ${palette.mainColor} ; 
`

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

export const Icon = styled(Link)`
  margin-left: 2rem;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin-left: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  }
` 

export const FormContent = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
` 

export const Form = styled.form`
  background-color: black;
  display: grid;
  max-width: 400px;
  height: auto;
  z-index: 1;
  margin: 0 auto;
  padding: 4rem 2rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .8);

@media screen and (max-width: 480px) {
    padding: 2rem;
  }

`

export const FormH1= styled.h1`
  color: white;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
` 
export const FormLabel= styled.label`
  margin-bottom: .5rem;
  color: white;
  font-size: .8rem;
` 

export const FormInput= styled.input`
  margin-bottom: 2rem;
  padding: 1rem;
  border: none;
  border-radius: .2rem;
`

export const FormButton= styled.button`
  padding: 1rem 0;
  border: none;
  border-radius: .2rem;
  background-color: ${palette.mainColor};
  color: white;
  font-size:  1.7rem;
  cursor: pointer;
`

export const Text = styled.span`
  text-align: center;
  margin-top: 1.8rem;
  color: white;
  font-size:  .9rem;
`
