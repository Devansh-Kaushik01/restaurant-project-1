import React from 'react'
import List from '../List/List'

function FoodLists({name}) {
  return (
    <div className='col-lg-6 d-flex flex-column 
    align-items-center mb-5 mb-lg-0'>
       <h3 className='fs-2 mb-5'>{name}</h3>
       <ul className='px-0'>
        <List 
        items={'breakfast :-'}
        ruppes={'Rs.50/-'}
        />
         <List 
        items={'Spicy Beef :-'}
        ruppes={'Rs.60/-'}
        />
          <List 
        items={'Sanghetti Bolognese :-'}
        ruppes={'Rs.80/-'}
        />
       </ul>
    </div>
     
  )
}

export default FoodLists