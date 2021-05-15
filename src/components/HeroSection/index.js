import React, { useState } from 'react'
import { Button } from '../ButtonElements';
import heroImg from '../../images/hero.png'
import { 
    HeroContainer, 
    HeroBg, 
    HeroPicture, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 

} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <HeroPicture src={heroImg}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Welcome to AminaCoin
                </HeroH1>
                <HeroP>
                AminaCoin is the community-run technology powering the cryptocurrency, 
                ether (AMK) and thousands of decentralized applications.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary="true" 
                    dark="true" 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        Get Started 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

