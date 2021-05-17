import styled from 'styled-components'

export const InfoContainer = styled.div`
    background: ${({ lightBg })=>( lightBg ? '#22222' : '#22222' )};
    margin-left:auto;
    margin-right:auto;
    margin-top:45px;
    max-width: 1400px; /* 2 */

    @media screen and (max-width: 768px){
        padding: 100px 0;
        
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    width:100%;    
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart })=> ( imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 0px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 0px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0px;
`;

export const TopLine = styled.p`
    color: #ceb0fa;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;   
    color: ${({ lightText }) => ( lightText ? '#f7f8fa' : '#010606' )};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#a5a5a5' : '#a5a5a5')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 500px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width:768px){
        margin: 0 0 200px 0;
    }
`;


export const ChartS = styled.p`
    color: white;
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 16px;
`;
export const ChartP = styled.p`
    color: #ceb0fa;
    font-size: 18px;
    line-height: 16px;
    font-weight: 400;
    margin-bottom: 16px;
`;
export const ChartLogo = styled.img`
    width: px;
    margin: 0 0 10px 0;
    grid-auto-columns: minmax(auto, 1fr);
    @media screen and (max-width:768px){

}
`;
export const ChartRow = styled.div`
    display: grid;
    grid-row :minmax(auto, 0.1fr);
    grid-template-areas: ${({ imgStart })=> ( imgStart ? `'Logo chart1 chart2 chart3 chart4 chart5 chart6 btn'` : `' Logo chart1 chart2 chart3 chart4 chart5 chart6 btn'` )};
    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'logo' 'chart1'` : `'logo' 'chart1'`)};
    }
`;
export const ChartColumn1 = styled.div`
    margin-left:40px;
    grid-area: chart1;
    
`;

export const ChartColumn2 = styled.div`
    margin-left:20px;
    grid-area: chart2;
`;
export const ChartColumn3 = styled.div`
    margin-left:40px;
    grid-area: chart3;
`;
export const ChartColumn4 = styled.div`
    margin-left:40px;
    grid-area: chart4;

`;
export const ChartColumn5 = styled.div`
    margin-left:40px;
    grid-area: chart5;

`;
export const ChartColumn6 = styled.div`
    margin-left:40px;
    grid-area: chart6;

`;
export const ChartColumnLogo = styled.div`
    grid-area: Logo;
`;
export const ChartColumnBtn = styled.div`
    margin-left:40px;
    grid-area: btn;
`;

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 0.1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart })=> ( imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

