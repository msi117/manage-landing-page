import React from 'react'
import './review.css'

function Review({data}) {
  return (
    <div className='review'>
        <div className="review__profile">
            <img src={data.image} alt="profile" />
        </div>
        <h3>{data.name}</h3>
        <p>{data.text}</p>
    </div>
  )
}

export default Review