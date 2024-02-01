import React from 'react'
import "./Contact.css"
import ContactInfo from '../../components/contactinfo/ContactInfo'
import Register from '../../main/form/Register'
import Reviews from '../../components/reviews/Reviews'

function Contact() {
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Contact</h1>
        </div>
      </header>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex align-items-center justify-content-center'>
            <ContactInfo />
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <Register />
          </div>
        </div>
      </div>
      <div className='bg-dark text-light py-4'>
        <Reviews/>
      </div>
    </div>
  )
}

export default Contact