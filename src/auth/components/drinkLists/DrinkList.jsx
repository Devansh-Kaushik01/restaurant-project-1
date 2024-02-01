import React from 'react'
import List from '../List/List'

function DrinkList({name}) {
  return (
    <div className='col-lg-6 d-flex flex-column 
    align-items-center mb-5 mb-lg-0'>
       <h3 className='fs-2 mb-5'>{name}</h3>
       <ul className='px-0'>
        <List 
        items={'coffee :-'}
        ruppes={'Rs.50/-'}
        />
         <List 
        items={' Juice :-'}
        ruppes={'Rs.80/-'}
        />
          <List 
        items={' Shakes :-'}
        ruppes={'Rs.100/-'}
        />
       </ul>
    </div>
  )
}

export default DrinkList