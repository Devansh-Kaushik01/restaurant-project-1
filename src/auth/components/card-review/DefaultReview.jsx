import React from 'react'
import { Card, CardBody, CardFooter, CardText, CardTitle } from 'react-bootstrap'
import SmallPara from '../para/SmallPara'
import ReviewPersonImg from '../../images/reviewperson.jpg' 

function DefaultReview({personname}) {
  return (
    <div className='col-lg-6'>
    <Card className='h-100 shadow'>
        <CardBody>
            <div className='p-4'>
            <CardText>
             <SmallPara/>
            </CardText>
            </div>
        </CardBody>
        <CardFooter className='d-flex align-items-center'>
              <img src={ReviewPersonImg} className='img-fluid rounded-circle mx-3 shadow'/>
              <CardTitle className='text-success'>{personname}</CardTitle>
        </CardFooter>
    </Card>
 </div>
  )
}

export default DefaultReview