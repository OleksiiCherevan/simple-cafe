import React from 'react'
import './index.scss'

const header = 'Доставка свежей и горячей еды в течение  40 минут'

export const MainHeader = (props) => {
  const {text = header} = props
  return (
    <div className='main-header'>{text}</div>
  )
}
