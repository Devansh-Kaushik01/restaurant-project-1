import React from 'react'
import './About.css'
import AboutChef1 from '../../images/aboutchef1.jpg'
import AboutChef2 from '../../images/aboutchef2.jpg'
import Paragraph from '../../components/para/Paragraph'
import ImageGallery from '../../components/imges/ImageGallery'
import Reviews from '../../components/reviews/Reviews'

function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>About</h1>
        </div>
      </header>
      <div className='container my-5'>
           <Paragraph/>
           <Paragraph/>
             <div className='row'>
                <div className='col-lg-6'>
                    <img src={AboutChef1} className='img-fluid my-4' alt='chef1' />
                </div>
                <div className='col-lg-6'>
                    <img src={AboutChef2} className='img-fluid my-4' alt='chef2' />
                </div>
             </div>
            <Paragraph/>
      </div>
      <div className='bg-dark text-light'>
        <ImageGallery/>
      </div>
       <div className='my-5'>
       <Reviews/>
       </div>
    </div>
  )
}

export default About