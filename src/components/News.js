import React from 'react'
import { useGlobalContext } from '../context/context'

const News = () => {

  const {isLoading} = useGlobalContext()
  if(isLoading){
    return <div className="loading"></div>
  }
  return (
    <div>News</div>
  )
}

export default News