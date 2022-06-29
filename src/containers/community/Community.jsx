import React from 'react'
import CTA from '../../components/cta/CTA'
import Review from '../../components/review/Review'
import './community.css'
import ali from '../../data/images/avatar-ali.png'
import anisha from '../../data/images/avatar-anisha.png'
import richard from '../../data/images/avatar-richard.png'

function Community() {

    const reviews = [
        {
            image: anisha,
            name: 'Anisha Li',
            text: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'
        },
        {
            image: ali,
            name: 'Ali Bravo',
            text: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.'
        },
        {
            image: richard,
            name: 'Richard Watts',
            text: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!'
        }
    ]


  return (
    <div className='community' id='community'>
        <h1>What they've said</h1>
        <div className="community__reviews">
            {
                reviews.map((review, index) => (
                    <Review data={review} key={index}/>
                ))
            }
        </div>
        <CTA text='Get Started'/>
    </div>
  )
}

export default Community