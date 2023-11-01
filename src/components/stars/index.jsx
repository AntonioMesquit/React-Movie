import { Container } from "./style"

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export function Stars({rating}){
return(
<Container>
<span> {rating >= 1 ? <AiFillStar /> : <AiOutlineStar />} </span>
<span> {rating >= 2 ? <AiFillStar /> : <AiOutlineStar />} </span>
<span> {rating >= 3 ? <AiFillStar /> : <AiOutlineStar />} </span>
<span> {rating >= 4 ? <AiFillStar /> : <AiOutlineStar />} </span>
<span> {rating >= 5 ? <AiFillStar /> : <AiOutlineStar />} </span>
</Container>
)
}