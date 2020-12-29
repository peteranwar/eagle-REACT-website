import styled, { keyframes  }from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

import * as palette from '../../variables/Variables';

export const Nav = styled.nav`
   background: ${({scrollNav}) => scrollNav ? 'black' : 'transperant'};
   height: 80px;
   margin-top: -80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 1111;

   @media screen and (max-width: 960px) {
       transition: all .5s ease-in-out;
   }
`

export const NavbarContainer= styled.div`
   height: 80px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: sticky;
   z-index: 1;
   width: 100%;
   padding: 0 1rem;
`

export const NavLogo = styled(LinkRouter)`
  color: white;
  display: flex;
  letter-spacing: 8px;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.5s ease-in-out;


  &:hover {
    color: ${palette.mainColor};
    transform: scale(1.2)
  }
`


export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
       display: block;
       color: white;
       position: absolute;
       top: 0;
       right: 0;
       transform: translate(-100%, 60%);
       font-size: 1.8rem;
       cursor: pointer;
   }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 22px;
  list-style: none;

  @media screen and (max-width: 768px) {
       display: none;
   }
`

export const NavItem = styled.li`
  height: 70px;
`

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  height: 100%;
  transition: all 0.5s ease-in-out;

  &.active{
      color: ${palette.mainColor};
      font-weight: bold ;
      border-bottom: 2px solid ${palette.mainColor};
  }

&:hover {
  color: gray;
  padding: 0 .7rem;
}
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
       display: none;
   }
`

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background-color: ${palette.mainColor};
  padding: 10px 25px;
  color: white;
  text-decoration: none;
  transition: all .5s ease-in-out;

  &:hover {
     background: white;
     color: ${palette.mainColor};
  }
`