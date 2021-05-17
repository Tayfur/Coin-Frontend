import React from 'react'
import {
    Container,
    Wrapper,
    CardImg,
    CardContent,
    CardTitle,
    CardDesc,
    CardMidTitle,
    CardText,

} from './serviceData'

const ServiceData = ({ id ,topTitle, topDesc, topImg, midTitle,fullText,midImg }) => {
    return (
        <>
        <Container>
            <Wrapper>

                <CardImg src={topImg}/>
                <CardContent>
                <CardTitle>{topTitle}</CardTitle>
                <CardDesc>{topDesc}</CardDesc>
                <CardMidTitle>"{midTitle}"</CardMidTitle>
                <CardText>{fullText}</CardText>
                </CardContent>
            </Wrapper>
        </Container>
            </>
    )
}

export default ServiceData