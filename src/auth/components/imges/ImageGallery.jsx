import React from 'react'
import Galleryimg1 from '../../images/gallery-img1.jpg'
import Galleryimg2 from '../../images/gallery-img2.jpg'
import Galleryimg3 from '../../images/gallery-img3.jpg'
import Galleryimg4 from '../../images/gallery-img4.jpg'
import Galleryimg5 from '../../images/gallery-img5.jpg'
import Galleryimg6 from '../../images/gallery-img6.jpg'

function ImageGallery() {
  return (
   <div className='container py-5'>
    <h2 className='text-center fs-1 mb-5 text-uppercase
    fw-bold'>Image Gallery</h2>
    <div className='row'>
        <div className='col-md-4 px-2'>
            <div className='my-3'>
             <img src={Galleryimg1} className='img-fluid'
             alt='gallery1'/>
            </div>
            <div className='my-3'>
              <img src={Galleryimg2} className='img-fluid'
              alt='gallery2' />
            </div>
        </div>
        <div className='col-md-4 px-2'>
            <div className='my-3'>
             <img src={Galleryimg3} className='img-fluid'
             alt='gallery1'/>
            </div>
            <div className='my-3'>
              <img src={Galleryimg4} className='img-fluid'
              alt='gallery2' />
            </div>
        </div>
        <div className='col-md-4 px-2'>
            <div className='my-3'>
             <img src={Galleryimg5} className='img-fluid'
             alt='gallery1'/>
            </div>
            <div className='my-3'>
              <img src={Galleryimg6} className='img-fluid'
              alt='gallery2' />
            </div>
        </div>
    </div>
   </div>
  )
}

export default ImageGallery