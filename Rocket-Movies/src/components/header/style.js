import styled from "styled-components";

export const Container = styled.header`
grid-area: header;
width: 100%;
height: 116px;
padding: 24px 123px 24px 123px;
display: flex;
align-items: center;
justify-content: center;
gap: 64px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
border-bottom: 1.5px solid ${({theme}) => theme.COLORS.BACKGROUND_600};

>h1{
    color: ${({theme}) => theme.COLORS.PINK};
}
> input{
    width: 80%;
    border: none;
    padding: 19px 24px;
    border-radius: 15px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

}


`
export const Alinhamento = styled.div`
display: flex;
align-items: center;
width: 350px;
>div {
    padding-right: 5px;
>h1{
    font-size: 14px;

}

>p {
   display: flex;
   justify-content: right;
   font-weight: 400;
   color: ${({theme}) => theme.COLORS.GREY_300};
   cursor: pointer;
   transition: 0.5s;

   &:hover{
    transform: scale(1.05);
   transition: all .5s linear;
   }
}

}


 img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
    
    
}
button{
    background-color: transparent;
    border: none;
    outline: none;
}
`

