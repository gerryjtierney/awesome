import { React, useState, useEffect } from 'react'

import "./Home.css";

//components
import Index from "../Index/Index"


export default function Home() {
    const [ideas, setIdeas] = useState([]);


    useEffect(() =>{
        fetch("https://devtest.awesomebeta.com/api/ideas/")
        .then(res =>{
            console.log("response: " + res.status)
            return res.json();
           
        })
        .then((result) =>{
            console.log(result)
            setIdeas(result.data[0]);
        })
    }, [])



  return (

    <div className="home">
        <div className="topBar"><h2>My Ideas</h2></div>        
        <Index ideas={ideas} />
    </div>
  )
}
