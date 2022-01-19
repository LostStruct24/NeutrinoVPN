import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Btn } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight  } from './HeroElements';

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>  {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>NeutrinoVPN</HeroH1>
                <HeroP>
                    Make the planet transparent, as it is for neutrinos!
                </HeroP>
                <HeroBtnWrapper>
                    <Btn to="/NeutrinoVPN/login" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Btn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
