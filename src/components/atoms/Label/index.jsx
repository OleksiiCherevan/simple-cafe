import React from 'react'
import './index.scss'
export const Label = (props) => {
    const {children} = props
  
  return (
    <div className='label'>{children}</div>
  )
}
