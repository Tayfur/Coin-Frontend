import React from 'react'
import { Button } from '../ButtonElements'
import logo from '../../images/logo.png'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Column2, 
    ImgWrap, 
    Img,
    ChartP,
    ChartLogo,
    ChartRow,
    ChartS,
    ChartColumn1,
    ChartColumn2,
    ChartColumn3,
    ChartColumn4,
    ChartColumn5,
    ChartColumn6,
    ChartColumnLogo,
    ChartColumnBtn

} from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine,darkText,description,buttonLabel,img,alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>                             
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>

                            <ChartRow>
                            <ChartColumnLogo>
                                <ChartLogo src={logo}/>
                                </ChartColumnLogo>
                                <ChartColumn1>
                                    <ChartS>Price</ChartS>
                                    <ChartP>410$</ChartP>
                                </ChartColumn1>
                                <ChartColumn2>
                                    <ChartS>Market Cap</ChartS>
                                    <ChartP>390,000,000$</ChartP>
                                </ChartColumn2>
                                <ChartColumn3>
                                    <ChartS>Volume(24h)</ChartS>
                                    <ChartP>59,000,000$</ChartP>
                                </ChartColumn3>
                                <ChartColumn4>
                                    <ChartS>Circulating&nbsp;Supply</ChartS>
                                    <ChartP>18,000,001&nbsp;AMC</ChartP>
                                </ChartColumn4>
                                <ChartColumn5>
                                    <ChartS>24h&nbsp;%</ChartS>
                                    <ChartP>+4,24%</ChartP>
                                </ChartColumn5>
                                <ChartColumn6>
                                    <ChartS>7d&nbsp;%</ChartS>
                                    <ChartP>+32,04%</ChartP>
                                </ChartColumn6>
                                <ChartColumnBtn>
                                <BtnWrap>
                                    <Button to='home' 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1: 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}
                                    </Button>
                                </BtnWrap>
                                </ChartColumnBtn>

                            </ChartRow>
                           
                        
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
