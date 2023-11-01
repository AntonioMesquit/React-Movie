import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

background-color: ${({theme , $isnew}) => $isnew ? "transparent" :  theme.COLORS.BACKGROUND_700};
color: ${({theme}) =>   theme.COLORS.GREY_300};

border: ${({theme , $isnew}) => $isnew ? `2px dashed #948F99` :  'none'};
gap: 8px;

margin-bottom: 8px;

border-radius: 10px;

padding-right: 16px;

> button{
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};
   font-size: 20px;

}

> input{
    height: 56px;
    width: 100%;
    font-size: 18px;
    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    outline: none;

    input::placeholder{
        color: ${({theme}) => theme.COLORS.WHITE};
    }
}
`