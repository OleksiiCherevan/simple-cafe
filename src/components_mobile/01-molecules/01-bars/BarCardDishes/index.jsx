import './index.scss'

import React from 'react'
import CardDish from '../../../00-atoms/04-cards/CardDish'

const BarCardDishes = (props) => {
  const { dishes = [1,2,3,4] } = props
  return (
    <div className='bar-card'>
        <div className="bar-card__dishes">
                {dishes.map((dish) => (
                    <div key={dish} className="bar-card__dish-card">
                        <CardDish></CardDish>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default BarCardDishes