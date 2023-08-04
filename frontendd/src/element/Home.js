import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import api from '../api';

function Home() {

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    api.get('http://localhost:3001/api/problems')
    .then((response)=>{
      setProblems(response.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  }, [])
  
  const deleteItem = async(itemId)=>{
    try {
      const response = await fetch(`http://localhost:3001/api/deleteProblem/${itemId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        window.location.reload()
      } else {
        alert('Failed to delete item.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h1> This is Home </h1>
      {problems.map((p)=>(
        <div className='cardH'>
        <h2 className='homeH'>{p.title}</h2>
        <p className='homeP'>{p.description}</p>
        <button onClick={()=>deleteItem(p._id)} className="new">Delete</button>
        </div>
      ))}
      <br/>
      <Link to='/newProblem' className='new'>Add new Problem</Link>
    </div>
  )
}

export default Home
