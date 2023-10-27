import styled from "styled-components";

export const Container = styled.button`
display: flex;
flex-direction: column;

background-color: rgba(255, 133, 155, 0.05);
border: none;
border-radius: 10px;
padding: 22px;
margin-bottom: 16px;
max-width: 1600px;
word-wrap: break-word;  
> h1{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
}
> .rating{
    color: ${({theme}) => theme.COLORS.PINK};
    text-align: left;
}
> .desc{
    width: 100%;
    color: ${({theme}) => theme.COLORS.GREY_300};
    text-align: left;
    height: 50px;
    overflow-y: hidden;
    word-wrap: break-word; 
    height: auto;
    

}



>footer{
    width: 100%;
    display: flex;
    margin-top: 24px;

}
`