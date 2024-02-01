import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import LunchImg from '../../../images/lunch-img.jpg'

function Lunch() {
    const lunch = [
        {
            id: 1,
            name: 'Chana Kulcha',
            description: 'cumin powder, ginger, coriander powder, carom powder and some mango powder, which is what gives the chana it is sour and tangy taste',
            price: 'Rs.100/-'
        },
        {
            id: 2,
            name: 'Dal Makhani',
            description: 'luscious, creamy dal recipe loaded with butter, this can be served with naan or paratha or accompany with some cooked rice',
            price: 'Rs.150/-'
        },
        {
            id: 3,
            name: 'Punjabi Dal Tadka',
            description: 'this Punjabi dal tadka is a mouth-watering dish served with roti, naan or rice. Any north Indian menu is incomplete without this tadka dal',
            price: 'Rs.80/-'
        }
    ];
    return (

        <div className='lunch bg-dark text-light py-5'>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5
       text-uppercase fw-bold text-success'>Lunch</h2>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column 
        justify-content-around mb-5'>
                        {lunch.map((lunch) => (
                            <div key={lunch.id}>
                                <Card className='border-0 bg-dark text-light'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'>
                                            {lunch.name}
                                        </CardTitle>
                                        <CardText className='text-center fs-5'>
                                            {lunch.description}
                                        </CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'>
                                            {lunch.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className='col-lg-6 d-flex 
          justify-content-center'>
                        <img src={LunchImg} className='object-fit-cover img-fluid w-75 mt-4 mt-lg-0 mb-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lunch