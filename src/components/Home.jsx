import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const projectId = 23
    const projectIdTwo = 87
  return (
    <div>

        <button onClick={() => navigate(`/project/${projectId}`)}>View Project {projectId}</button>
        <button onClick={() => navigate(`/project/${projectIdTwo}`)}>View Project {projectIdTwo}</button>
    </div>
  )
}

export default Home