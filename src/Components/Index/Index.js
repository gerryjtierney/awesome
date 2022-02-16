import { useState } from 'react'
import { Link } from "react-router-dom";
import Idea from '../IdeaCard/IdeaCard'

//styles
import "./Index.css"

export default function Index({ ideas }) {
    // const [openIdeas, setOpenIdeas] = useState([]);
    // const [inReviewIdeas, setInReviewIdeas] = useState([]);
    // const [acceptedIdeas, setAcceptedIdeas] = useState([]);

    
    const openIdeas = (ideas.filter(idea => idea.status === "open"));
    const inReviewIdeas = (ideas.filter(idea => idea.status === "in-review"));
    const acceptedIdeas = (ideas.filter(idea => idea.status === "accepted"));
    



  return (
    <div className="Index">

            <div className="Index-openIdeas ideasContainer">
                <h3>Open Ideas</h3>
                {openIdeas.map((idea) => (

                        <Idea
                            key={idea.id}
                            name={idea.name}
                            likes = {idea.user_interactions[0].likes}
                            replies={idea.user_interactions[0].replies.length}
                            status = {idea.status}
                            id = {idea.id}
                            idea = {idea}
                        >
                        </Idea>

                ))}
            </div>
            
        <div className="Index-inReviewIdeas ideasContainer">
            <h3>Ideas In-Review</h3>
            {inReviewIdeas.map((idea) => (
                <Idea
                    key={idea.id}
                    name={idea.name}
                    likes = {idea.user_interactions[0].likes}
                    replies={idea.user_interactions[0].replies.length}
                    status = {idea.status}
                    id = {idea.id}
                    idea = {idea}
                    >
                   
                </Idea>
            ))}
        </div>

        <div className="Index-acceptedIdeas ideasContainer">
            <h3>Accepted Ideas</h3>
            {acceptedIdeas.map((idea) => (
                <Idea
                    key={idea.id}
                    name={idea.name}
                    likes = {idea.user_interactions[0].likes}
                    replies={idea.user_interactions[0].replies.length}
                    status = {idea.status}
                    id = {idea.id}
                    idea = {idea}
                    >
                </Idea>
            ))}
        </div>
            


    </div>
  )
}
