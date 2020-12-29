import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesImg, ServicesP, ServicesWrapper } from './ServicesElements'
import Img1 from "../../assets/images/svg-3.svg";
import Img2 from "../../assets/images/svg-4.svg";
import Img3 from "../../assets/images/svg-5.svg";



const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
              <ServicesCard>
                <ServicesImg src={Img1} />
                <ServicesH2>Business Analysis</ServicesH2>
                <ServicesP>It is a long established fact that a reader will be distracted by the readable content of a page</ServicesP>
              </ServicesCard>
              <ServicesCard>
                <ServicesImg src={Img2} />
                <ServicesH2>Web Development</ServicesH2>
                <ServicesP>It is a long established fact that a reader will be distracted by the readable content of a page. corrupti.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                <ServicesImg src={Img3} />
                <ServicesH2>Business Consulting</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos, accusantiumm. </ServicesP>
              </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
