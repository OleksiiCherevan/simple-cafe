import React from 'react'
import './index.scss'

const title = 'Доставка свежей и горячей еды в течение  40 минут'

export const Title = (props) => {
  const {text = title} = props
  return (
    <div className='main-title'>{text}</div>
  )
}
