import React from 'react'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'
import Star2 from '../Star/Star2'


export default function Portfolio() {
  return (
    <div className=' portfolio container'>
      <h1 className='fs-1 mb-4'>PORTFOLIO COMPONENT</h1>
      <Star2/>
      <div className='row g-5 mb-5'>
        <div className='col-4'><img src={img1} className='w-co rounded-3'/></div>
        <div className='col-4'><img src={img2} className='w-co rounded-3'/></div>
        <div className='col-4'><img src={img3} className='w-co rounded-3'/></div>
        <div className='col-4'><img src={img1} className='w-co rounded-3'/></div>
        <div className='col-4'><img src={img2} className='w-co rounded-3'/></div>
        <div className='col-4'><img src={img3} className='w-co rounded-3'/></div>
      </div>
    </div>
  )
}
