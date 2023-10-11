import { createGlobalStyle } from "styled-components";
// estilizacao global do projeto

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;


}
body{
    -webkit-font-smoothing: antialiased;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color: ${({theme}) => theme.COLORS.WHITE    };  

    

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
    filter: brightness(0.5);
}



`