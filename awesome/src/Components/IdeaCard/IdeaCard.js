//styles
import "./IdeaCard.css"

//assets
import { HiHeart, HiChat } from "react-icons/hi";

//router
import { Link } from "react-router-dom"

//hooks
import { useState } from "react"





export default function Idea( {name, likes, replies, id, idea} ) {

  const [data, setData] = useState(idea)



  

  return (
    <div className="IdeaCard">
            <Link to={{ pathname: `/ideas/${id}`, state: { idea } }}><div className="IdeaCard-name">{name}</div></Link>
            <div className="IdeaCard-likes"> <HiHeart /> {likes}</div>
            <div className="IdeaCard-replies"><HiChat /> {replies}</div>            
    </div>
  )
}
