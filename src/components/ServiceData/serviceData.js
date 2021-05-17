import { Link } from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
    height: 800px;
    display: flex;
    position:relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: auto; /* 1 */
    margin-left:  auto; /* 1 */
    max-width: 1000px; /* 2 */
    margin-top:100px;
    margin-bottom:100px;
    @media screen and (max-width: 1000px){
        max-width: 500px; /* 2 */

    }

    @media screen and (max-width: 500px){
        max-width: 300px; /* 2 */

    }
`;
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;
export const CardImg = styled.img`
    width: 70%;
    -o-object-fit: cover;
    object-fit:cover;
    margin-left:auto;
    margin-right:auto;
    @media screen and (max-width: 1068px){
        margin: 0 0 10px 0;
        width:100%;
}    
`;
export const CardContent = styled.div`
    margin-top:10px;
    width:100%;
    display:flex;
    flex-direction:column;
    @media screen and (max-width: 1068px){
    font-size:24px

}    
`;
export const CardTitle = styled.h1`
    margin-left:auto;
    margin-right:auto;
    font-size:42px;
    color:whitesmoke;
    @media screen and (max-width: 1068px){
    font-size:24px

}    
`;
export const CardDesc = styled.p`
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    font-size:16px;
    color:gray;
    font-style:italic;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media screen and (max-width: 1068px){
    font-size:13px
}    
`;
export const CardMidTitle = styled.h3`
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
    font-style:italic;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:24px;
    color:#ceb0fa;
    @media screen and (max-width: 1068px){
    font-size:18px

}    
`;
export const CardText = styled.p`
    margin-top:40px;
    margin-left:auto;
    margin-right:auto;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-style:italic;
    color:whitesmoke;
    @media screen and (max-width: 1068px){
    font-size:12px

}    
`;