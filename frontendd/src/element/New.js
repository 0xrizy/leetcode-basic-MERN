import React, { useState } from "react";
import axios from "axios";
import api from "../api";

function New() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newProblem = {
        title,
        description
    }
    api.post('http://localhost:3001/api/newProblem', newProblem, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('New user added:', response.data);
          alert(`New Problem ${title} added` )
          // Do something with the response data if needed
        })
        .catch((error) => {
          console.error('Error adding new user:', error);
        });
  }

  return (
    <div>
      <h2 className="hdng"> Add new Problem: </h2>
      <form onSubmit={handleSubmit}>
        <div className="card1"> 
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="card1">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <button className="new" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default New;
