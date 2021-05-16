import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
const img = require('../../images/hero.png')
export const HeroContainer = styled.div`
    background: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    height: 800px;
    position:relative;
    z-index: 1;
    margin-right: auto; /* 1 */
    margin-left:  auto; /* 1 */
    max-width: 1400px; /* 2 */
    flex-direction: column;
    @media screen and (max-width: 768px){
        padding:0;
        height: 800px;

    }
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0,2) 0%, 
            rgba(0,0,0,0,6) 100%
            ),
        linear-gradient(
            180deg, 
            rgba(0,0,0,0,2) 0%, 
            transparent 100%
            );
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: relative;
    overflow: hidden;  
    
    @media screen and (max-width: 768px){

}
`;

export const HeroPicture = styled.img`
    width: 100%;
    -o-object-fit: contain;
    object-fit:contain ;
    margin: 1px 0 10px 0;

    @media screen and (max-width: 768px){
        margin: 0 0 10px 0;
 
}
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
    margin-top:50px;
 
}
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 44px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }

    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #a5a5a5;
    font-size: 18px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;   
`;

