import { createGlobalStyle } from "styled-components";
// estilizacao global do projeto

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;


}
body{
    -webkit-font-smoothing: antialiased;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE    };  

    
 &::-webkit-scrollbar{
    width: 10px;
    padding-top: 10px;
}
&::-webkit-scrollbar-thumb{
    width: 10px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 20px;
}
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
button, a{
    cursor: pointer;
    transition: filter 0.2s;
}
button:hover, a:hover{
    filter: brightness(0.8);
}



`