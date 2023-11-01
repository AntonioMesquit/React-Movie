import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
align-items: center;
background-color: #262529;
color: ${({theme}) => theme.COLORS.GREY_300};
margin-bottom: 8px;
border-radius: 10px;

>input{
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;
    font-size: 16px;
    outline: none;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GREY_300};
        font-size: 18px;
    }
   
}
> svg{
       width: 25px;
        margin-left: 16px;
    }



`