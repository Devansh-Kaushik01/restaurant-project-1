import React from 'react'
import "./Review.css"
import DefaultReview from '../card-review/DefaultReview'


function Reviews() {
  return (
    <div className='reviews-section container'>
          <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Reviews</h2>
          <div className='row g-4'>
           <DefaultReview 
            personname={'John'}
           />
             <DefaultReview 
            personname={'Dev'}
           />
             <DefaultReview 
            personname={'Aaryan'}
           />
             <DefaultReview 
            personname={'Amit'}
           />
          </div>
    </div>
  )
}

export default Reviews