import React from 'react'
import CTA from '../../components/cta/CTA'
import graph from '../../data/images/illustration-intro.svg'
import './manage.css'

function Manage() {
  return (
    <section className='manage' id='about'>
        <div className="manage__content">
            <h1>Bring everyone together to build better products.</h1>
            <p>Manage maked it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <CTA text='Get Started'/>
        </div>
        <div className="manage__graphs">
            <img src={graph} alt="graph" />
        </div>
    </section>
  )
}

export default Manage