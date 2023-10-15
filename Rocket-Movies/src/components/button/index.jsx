import { Container } from "./style";

export function Button({title, loading = false, ...rest}){
    //props serve para mudar o titulo do botao, porem pode ser utilizada desestruturando o title
    return(
    <Container 
    type="button"
    disabled={loading}
   
    {...rest}>
    {loading ? "Carregando..." : title}
    </Container>
    )
}