import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import * as palette from '../../variables/Variables';


export const SidebarContainer = styled.aside`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 11111;
   width: 100%;
   height: 100%;
   background: black;
   display: flex;
   flex-direction: column;
   justify-content: center;
   transition: all .5s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
   top: ${({ isOpen}) => (isOpen ? '0' : '-100%')}; 
`

export const CloseIcon = styled(FaTimes)`
   color: white;
`
export const Icon = styled.div`
   position: absolute;
   top: 1.5rem;
   right: 1.8rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
`

export const SidebarWrapper = styled.div`
   /* color: #fff; */
`

export const SidebarMenu = styled.ul`
  width: 88%;
  display: flex;
  flex-direction: column;
`

export const SidebarLink = styled(LinkScroll)`
   display: flex;
   text-align:center;
   justify-content:center;
   font-size: 1.5rem;
   text-decoration: none;
   list-style: none;
   padding: 25px 0; 
   transition: all .5s ease-in-out;
   text-decoration: none;
   color: white;
   cursor: pointer;

   &:hover{
       color: ${palette.mainColor};
   }
`

export const SidebarBtn = styled.div`
   display: flex;
   justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
   border-radius: 50px;
   background: ${palette.mainColor};
   white-space: nowrap;
   color: white;
   padding: 16px 65px;
   font-size: 1rem;
   outline: none;
   border: none;
   cursor: pointer;
   text-decoration: none;
   transition: all .5s ease-in-out;

   &:hover{
       color: ${palette.mainColor};
       background: white;
   }


`