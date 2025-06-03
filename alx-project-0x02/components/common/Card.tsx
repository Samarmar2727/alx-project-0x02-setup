import { CardProps } from "@/interfaces";

 const Card = ({ title, content }: CardProps) =>{
    return(
        <>
        <h1>{title}</h1>
        <p>{content}</p>
        </>
        
    )
 }

 export default Card