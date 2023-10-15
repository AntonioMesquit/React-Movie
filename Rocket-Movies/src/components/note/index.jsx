import { Container } from "./style";
import { Tag } from "../tag";
import { Stars } from "../stars";
export function Note({data, ...rest}){
    return(
        <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars rating={data.rating}/>
      <p className="desc">{data.description}</p>
      

      {
        data.tags && 
        <footer>
            {
                data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
            }
        </footer>
      }
      </Container>
    )
}