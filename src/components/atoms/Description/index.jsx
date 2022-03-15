import React from 'react'
import './index.scss'

export const Description = (props) => {
  const {children} = props

  return (
    <div className='description'>{children}</div>
  )
}
