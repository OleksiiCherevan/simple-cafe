import './index.scss'

import React from 'react'
import UserCard from '../../../00-atoms/04-cards/UserCard'

const BarBestWorkers = (props) => {
    const {workers} = props
  return (
    <div className='bar-best-workers'>
            {workers.map(worker => <UserCard {...worker}></UserCard>)}  
       </div>
  )
}

export default BarBestWorkers