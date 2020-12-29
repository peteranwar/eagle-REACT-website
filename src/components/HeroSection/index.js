import React, { useState } from "react";
import Video from "../../assets/videos/video2.mp4";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnContainer,
  HeroContainer,
  HeroContent,
  HeroHeader,
  HeroPara,
  VideoBg,
} from "./HeroElements";
import Typewriter from 'typewriter-effect';

import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroHeader>
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
            onInit={(typewriter) => {
              typewriter
              .typeString("Home of Total IT solutions & Technology services")
              .pauseFor(3000)
              .deleteAll()
              .typeString("24/7 I.T Support from the best team")
              .pauseFor(3000)
              .start()
            }}
          />
          </HeroHeader>
        <HeroPara>
          There are many variations of passages of Lorem ipsum dolor voluptatem
          . iste exercitationem laborum ab, doloribus accusamus.
        </HeroPara>
        <HeroBtnContainer>
          <Button
            smooth={true}
            spy={true}
            duration={600}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            fontBig="true"
            big="true"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
