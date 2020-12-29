import React from "react";
import {animateScroll as scroll } from 'react-scroll';

import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import { FooterContainer, FooterLink, FooterlinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIcons, SocialIconsLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIconLink } from "./FooterElements";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterlinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of service</FooterLink>
            </FooterlinkItems>
            <FooterlinkItems>
              <FooterLinkTitle> Contact Us </FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of service</FooterLink>
            </FooterlinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterlinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of service</FooterLink>
            </FooterlinkItems>
            <FooterlinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Linkedin</FooterLink>
            </FooterlinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>🦅EAGLE</SocialLogo>
            <WebsiteRights>EAGLE &copy; { new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia> 
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
