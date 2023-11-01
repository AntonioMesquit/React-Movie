import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 250px;

background-color: #262529;
color: ${({theme}) => theme.COLORS.WHITE};
border: none;
resize: none;
margin-bottom: 8px;
border-radius: 10px;
padding: 16px;
outline: none;
font-size: 16px;
&::placeholder{
    color: ${({theme}) => theme.COLORS.GREY_300};
    font-size: 18px;
}
`