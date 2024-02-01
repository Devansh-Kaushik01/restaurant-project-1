import React from 'react'

function List({items,ruppes}) {
  return (
    <div>
          <li className='d-flex 
        justify-content-between'>
           <p className='fs-3 mx-2'>{items}</p>
           <p className='fs-3 mx-2 text-success fw-bold'>{ruppes}</p>
         </li>
    </div>
  )
}

export default List