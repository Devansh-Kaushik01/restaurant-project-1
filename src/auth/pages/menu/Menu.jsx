import React from 'react'
import './Menu.css'
// import LunchImg from '../../images/lunch-img.jpg'
import Breakfast from './breakfast/Breakfast';
import Lunch from './lunch/Lunch';
import Dinner from './dinner/Dinner';
import Dessert from './dessert/Dessert';

function Menu() {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex 
                align-items-center justify-content-center'>
          <h1 className='text-light'>Menu</h1>
        </div>
      </header>
      <Breakfast/>
      <Lunch/>
      <Dinner/>
      <Dessert/>
    </div>

  )
}

export default Menu