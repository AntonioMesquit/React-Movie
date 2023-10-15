import styled from "styled-components";

export const Container = styled.div`

width: 100%;


label{
    cursor: pointer;
}
>header{
    width: 100%;
    height: 144px;
    background: rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    padding: 0px 124px;


    svg{

    }

}
`

export const Form = styled.form`
max-width: 400px;
margin: -110px auto 0;


> div:nth-child(3){
    margin-bottom: 24px;
}



`
export const Avatar = styled.form`
position: relative;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 64px;

>img{
    border-radius: 50%;
    width: 220px;
}
>label {
 position: absolute;
 right: 100px;
 bottom: 8px;
 background-color: ${({theme}) => theme.COLORS.PINK};
 padding: 15px 15px;
 border-radius: 50%;



>svg{
   font-size: 24px;
   color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  
   
}
    >input{
display: none;
}
}


`