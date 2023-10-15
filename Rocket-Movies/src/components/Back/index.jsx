import { Container } from "./style";
import {FiArrowLeft} from 'react-icons/fi'

export function Back({icon: Icon,title , ...rest}){
    return(
    <Container>
   <button {...rest}>
   {Icon && <Icon size={20}/>}
    <p>{title}</p>
    </button>
    
    </Container>
    )
}