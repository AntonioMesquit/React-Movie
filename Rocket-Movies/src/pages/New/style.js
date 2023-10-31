import styled from "styled-components";

export const Container = styled.div`
width: 100%;
grid-template-rows: 114px auto;
height: 100vh;
grid-template-areas: 
"header"
"content";


`
export const Content = styled.div`
margin: 100px 106px 85px 123px;

> main{
grid-area: content;
&::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* You can change this to a different color if needed */
  }
> header {
margin-bottom: 40px;
> a{
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 17px;
    margin-bottom: 24px;
    svg{
        margin-right: 5px;
    }

    
}
> h1{

font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
}

> .ss {
    display: flex;
    gap: 10px;
    background-color: #0D0C0F;
    padding-top: 15px;
    padding-left: 15px;
    padding-bottom: 8px;
    padding-right: 15px;
    flex-wrap: wrap;

    
}
> .marc{
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #999591;
margin-bottom: 24px;
}
> .exit{
    display: flex;
    gap: 35px;
   

}
}
@media screen and (max-width: 768px) {
    margin: 0;
    padding: 20px;
  

    
}
`
export const Form = styled.div`
>div {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}

`