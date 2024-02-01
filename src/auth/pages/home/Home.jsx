import React from 'react'
import MenuBtn from '../../components/buttons/MenuBtn'
import './home.css'
import { Link } from 'react-router-dom'
import ImageGallery from '../../components/imges/ImageGallery'
import ContactInfo from '../../components/contactinfo/ContactInfo'
import ContactImg from '../../images/contact-img.jpg'
import AboutImg from '../../images/about.jpg'
import Paragraph from '../../components/para/Paragraph'
import FoodLists from '../../components/foodLists/FoodLists'
import DrinkList from '../../components/drinkLists/DrinkList'

function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100
        d-flex align-items-center text-light shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 
                   d-flex d-sm-block flex-column
                   align-items-center'>
              <h2 className='mb-0 text-black fw-bold'>
                Welcome To
              </h2>
              <h1 className='mb-5 text-black 
                      fw-bold text-center text-sm-start'>
                React Restaurant
              </h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex
            justify-content-center d-none d-lg-flex'>
            <img src={AboutImg} className='img-fluid w-50 object-fit-cover'
              alt='about img' />
          </div>
          <div className='col-lg-6 d-flex flex-column 
          align-items-center justify-content-center'>
            <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
            <Paragraph />
            <Paragraph className='mb-5' />
            <Link to="/about">
              <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='menu-section py-5 text-light shadow'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='fs-1 mb-5 text-uppercase fw-bold'>
            Our Favorites
          </h2>
          <div className='row mb-5 w-100'>
            <FoodLists
              name={"Food"}
            />
            <DrinkList
              name={"Drinks"}
            />
          </div>
          <MenuBtn />
        </div>
      </div>
      <ImageGallery />
      <div className='bg-dark text-light py-5 shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column 
           align-items-center justify-content-center mb-5 mb-lg-0'>
              <ContactInfo />
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={ContactImg} className='img-fluid w-50' alt='contact-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home