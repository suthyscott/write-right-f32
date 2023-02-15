import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectView = () => {
    const {id} = useParams()

    // write a useEffect to make a get request using the id to access the info for that specific project
  return (
    <div>ProjectView for project {id}</div>
  )
}

export default ProjectView