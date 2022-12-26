import React from 'react'
import spinner from './Spinning arrows.gif'

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="loading-style" />
    </div>
  )
}

export default Spinner;