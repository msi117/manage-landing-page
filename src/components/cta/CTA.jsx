import React from 'react'
import './cta.css'

function CTA({text, style}) {
  return (
    <button type='submit' className='cta__button' style={style}>{text}</button>
  )
}

export default CTA