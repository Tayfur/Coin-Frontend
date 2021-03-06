import { Link } from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #222222;
    margin-right: auto; /* 1 */
    margin-left:  auto; /* 1 */

  max-width: 1300px; /* 2 */

    @media screen and (max-width: 768px){
        height: 1300px;
        padding-top:400px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
        height: 1300px;
        padding-top:300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled(LinkR)`
    background: #222222;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgb(206,176,250);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color:#fff;

`;

export const ServicesP = styled.p`
    color:#a5a5a5;
    font-size: 0.8rem;
    text-align: center;
`;

