import "./AttachmentCard.css"

export default function AttachmentCard({ name }) {
  return (
    <div className="AttachmentCard">
        <div className="AttachmentCard-name">{name}</div>
        <div className="AttachmentCard-delete"><button className="btn ACdlt">X</button></div>
    </div>
  )
}
