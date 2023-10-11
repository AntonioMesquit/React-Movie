import styled from "styled-components";

export const Container = styled.button`
    
width: 100%;
background-color: ${({theme}) => theme.COLORS.PINK};
color: ${({theme}) => theme.COLORS.BACKGROUND_800};
padding: 0 16px;
margin-top: 16px;
border: none;
height: 56px;
border-radius: 10px;
font-weight: 500;

&:disabled{
    opacity: 0.5;   
}

`