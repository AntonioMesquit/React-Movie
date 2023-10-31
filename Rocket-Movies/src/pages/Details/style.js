import styled from "styled-components";

export const Container = styled.div`
display: grid;
width: 100%;
height: 100vh;
grid-template-rows: 300px auto;
grid-template-areas:
"header"
"content";

`
export const Content = styled.div`
grid-area: content;
margin-top: 40px;
width: 70%;
margin-left: 123px;
margin-right: 106px;
overflow-y: auto;
padding-right: 26px;
white-space: pre-line;
margin-bottom: 50px;


&::-webkit-scrollbar{
width: 10px;
}
&::-webkit-scrollbar-thumb{
width: 10px;
border-radius: 10px;
background-color: ${({theme}) => theme.COLORS.PINK};
}




> .titleMovie{
margin-top: 24px;
margin-bottom: 24px;
}
> .infos{
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    font-size: 16px;
   
    >img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    > .ico{
        color: ${({theme}) => theme.COLORS.PINK};
        margin-top: 5px;
        font-size: 20px;
    }
}

> div{

 display: flex;
 align-items: center;
 gap: 10px;
 margin-top: 20px;
 margin-bottom: 30px;
 
 > ul{
    display: flex;
    margin-top: 6px;
    font-size: 20px;
    gap: 7px;
    color: ${({theme}) => theme.COLORS.PINK};
 }
 
}
p{
    text-align: justify;
    white-space: pre-line;
}


@media screen and (max-width: 768px) {
    margin: 20px 20px 0px 20px;
}  
`