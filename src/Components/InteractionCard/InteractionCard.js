//styles
import "./InteractionCard.css"

//assets
import { HiHeart, HiChat } from "react-icons/hi";


export default function InteractionCard({userImage, name, content, likes, replies}) {
  return (
    <div className="InteractionCard">
        <div className="InteractionCard-top">
            <div className="InteractionCard-top-userImage"><img className="InteractionCard-top-userImage-image" src={userImage}></img></div>
            <div className="InteractionCard-top-name">{name}</div>
            <div className="InteractionCard-top-posted">Posted: 19th December 1984 </div>
        </div>

        <div className="InteractionCard-content">{content}</div>

        <div className="InteractionCard-bottom">
            <div className="InteractionCard-bottom-likes"><HiHeart />{likes}</div>
            <div className="InteractionCard-bottom-replies"><HiChat /></div>
        </div>
    </div>
  )
}
