import styled from "styled-components";

export const Container = styled.div`
width: 98vw;
margin-left: 10px;

grid-area: home;
overflow-y: auto;
.linhar{
    display: flex;
    flex-direction: column;
}
> main{
grid-area: content;
width: 100%;
margin-top: 30px;
padding: 0px 106px 0px 123px; 
overflow-y: auto;

&::-webkit-scrollbar{
    width: 10px;
}
&::-webkit-scrollbar-thumb{
    width: 10px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 20px;
}
>.ifos{
    display: flex;
    
    justify-content: space-between;

    >h1{
        font-weight: 400;
    }
    >button{
    display: flex;
    align-items: center;
    border: none;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding: 16px 24px;
    border-radius: 8px;

    >svg{
        font-size: 20px;
        margin-right: 8px;
    }
}

    
}



}


`
