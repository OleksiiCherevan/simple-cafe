import './index.scss'

import React from 'react'

import Header2Underline from '../../00-atoms/01-headers/Header2Underline'
import CardReview from '../../00-atoms/04-cards/CardReview'

const Reviews = () => {
  return (
    <div className='reviews'>
        <div className="reviews-body">
            {[1,2,3,4].splice(0,3).map(review => <CardReview key={review}></CardReview>)}
        </div>
    </div>
  )
}

export default Reviews