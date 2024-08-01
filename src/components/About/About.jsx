import React from 'react'
import Star from '../Star/Star'

export default function About() {
  return (
    <div>
      <div className='bg-custom mt-5 padding'>
        <h1 className='fs-1 mb-4'>ABOUT COMPONENT</h1>
        <Star/>
        <div className='row mt-3'>
            <p className='col-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='col-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
       </div>
    </div>
  )
}
