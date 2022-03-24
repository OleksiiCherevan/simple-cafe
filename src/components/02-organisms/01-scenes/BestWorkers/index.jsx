import './index.scss'

import React from 'react'


import user1 from './../../../../assets/img/user1.jpg'
import user2 from './../../../../assets/img/user2.jpg'
import user3 from './../../../../assets/img/user3.jpg'

import BarBestWorkers from '../../../01-molecules/01-bars/BarBestWorkers'


const WORKERS = [
    {
        user: 'Григорій Ковальов',
        position: 'Шеф холодного цеха',
        image: user1
    },
    {
        user: 'Наталья Едуардовна',
        position: 'Су-шеф гарячого цеха',
        image: user2
    },
    {
        user: 'Олег Гилберт',
        position: 'Шеф-кондитер',
        image: user3
    },
]

const BestWorkers = () => {
  return (
    <div className='best-workers'>
        <BarBestWorkers workers={WORKERS}></BarBestWorkers>
    </div>
  )
}

export default BestWorkers