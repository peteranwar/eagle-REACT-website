import { Link } from "react-router-dom";
import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const FooterContainer = styled.footer`
  background-color: black;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 45px 25px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 30px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterlinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  color: white;
  margin: 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 820px) {
    margin: 0;
    padding: 10px;
    width: 100;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-left: 3px solid ;
    padding-left: 8px;
    color: ${palette.mainColor};
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  margin-bottom: 1rem;
  letter-spacing: 5px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;

  transition: all 0.5s ease-in-out;
  &:hover {
    letter-spacing: 7px;
    color: ${palette.mainColor};
  }
`;

export const WebsiteRights = styled.small`
  color: white;
  margin-bottom: 1rem;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: rotate(360deg) scale(1.4);
    color: ${palette.mainColor};
  }
`;
