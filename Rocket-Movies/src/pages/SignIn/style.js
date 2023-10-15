import styled from "styled-components";
import background from '../../assets/background.jpeg'

export const Container = styled.div`
display: flex;
height: 100vh;
`
export const Form = styled.div`
width: 55%;
margin-bottom: 40px;


`
export const Content = styled.div`
height: 75.5vh;
width: 700px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 100px;

>h1{
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
color: ${({theme}) => theme.COLORS.PINK}
}
> p{
    margin-bottom: 48px;
}
>h2{
    margin-bottom: 42px;
}
`
export const Background = styled.div`
flex: 1;
background-image: url(${background});
background-size: cover;
`