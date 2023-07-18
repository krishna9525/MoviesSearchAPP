import React from 'react'
import {useParams} from "react-router-dom"



const SingleMovies = () => {

  const { id }=useParams()

  
  return (
    <div>SingleMovies {id}</div>
  )
}

export default SingleMovies