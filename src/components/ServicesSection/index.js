import React from 'react'

import service1 from '../../images/merge.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'

import {
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
 } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to='/services'>
                    <ServicesIcon src={service1} />
                    <ServicesH2>Upgrade your nowledge</ServicesH2>
                    <ServicesP>AminaCoin is a program of interconnected upgrades designed to make ethereum more scalable, secure,and sustainable</ServicesP>
                </ServicesCard>
                <ServicesCard to='/services'>
                    <ServicesIcon src={service2}  />
                    <ServicesH2>AminaCoin for enterprise</ServicesH2>
                    <ServicesP>See how AminaCoin can open up new business models, reduce your costs and future-proof your business.</ServicesP>
                </ServicesCard>
                <ServicesCard to='/services'>
                    <ServicesIcon src={service3} />
                    <ServicesH2>The AminaCoin community</ServicesH2>
                    <ServicesP>AminaCoin is all about community. It's made up of people from all different backgrounds and interests .See how you can join in.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
