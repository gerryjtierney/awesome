//styles
import "./Idea.css"

import {React, useState, useEffect } from 'react'

import { useLocation } from "react-router-dom"

//components
import AttachmentCard from "../AttachmentCard/AttachmentCard";
import InteractionCard from "../InteractionCard/InteractionCard";


export default function Idea() {

  const location = useLocation();

  const [data, setData] = useState(location.state.idea)
  const [attachments, setAttachments] = useState()
  const [userInteractions, setUserInteractions] = useState([])
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() =>{
    setAttachments(data.attachments)
    setUserInteractions(data.user_interactions)
  }, [data.attachments])


  const handleDelete = (e) =>{
    
  }


  // console.log(data);
  console.log(userInteractions);
  // console.log(attachments);


  return (
    <div className="Idea">
    
    
      <div className="Idea-details">
        <div className="Idea-details-name">{data.name}</div>
        <div className="Idea-details-status">
          <div className="Idea-details-status-owner">{data.owner.name}</div>
          <div className="Idea-details-status-date-created">{data.created_at}</div>
          <div className="Idea-details-status-status">{data.status}</div>
        </div>
        <div className="Idea-description">
          <div className="Idea-description-description">Description: {data.description}</div>
          <div className="Idea-description-sector">{data.sector}</div>
          <div className="Idea-description-priority">{data.priority}</div>
          <div className="Idea-description-attachments">{attachments.map((interaction) => <AttachmentCard name={interaction.name} />)}</div>
        </div>
        <div className="Idea-content">
          <div className="Idea-content-content">{data.content.substring(0, 1200)}</div>
          <div className="Idea-content-updated">Last updated at: {data.updated_at}</div>
        </div>
      </div>
        


      <div className="Idea-interactions">
        <div className="Idea-interactions-name">User Interactions</div>
        <div className="Idea-interactions-interactions">
          {userInteractions.map((interaction) => 
            <InteractionCard 
              userImage={interaction.user.profile_image}
              name={interaction.user.name}
              content={interaction.content}

            />
          )}
        </div>
        <div className="Idea-interactions-comment">Comment</div>
      </div>
    </div>
  )
}
