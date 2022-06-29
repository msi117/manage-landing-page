import React from 'react'
import './features.css'

function Features({head, text}) {
  return (
    <div className='features'>
        <h3>{head}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Features