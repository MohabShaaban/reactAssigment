import React from 'react'
import avatar from '../../assets/images/avatar.svg'
import Star from '../Star/Star'
import './Home.css'

export default function Home() {
  return (
    <div className='bg-custom'>
        <img src={avatar} className='avatar-image mb-4 mt-5 pt-5'/>
        <h1 className='fs-1 mb-4'>START FRAMEWORK</h1>
        <Star/>
        <p className='mt-4'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}