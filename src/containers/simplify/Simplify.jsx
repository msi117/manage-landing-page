import React from 'react'
import CTA from '../../components/cta/CTA'
import './simplify.css'

function Simplify() {
    const style = {
    backgroundColor: 'var(--Vary-Light-Gray)',
    color: 'var(--Bright-Red)'
    }
  return (
    <div className='simplify'>
        <h1>Simplify how your team works today. </h1>
        <CTA text='Get Started' style={style} />
    </div>
  )
}

export default Simplify