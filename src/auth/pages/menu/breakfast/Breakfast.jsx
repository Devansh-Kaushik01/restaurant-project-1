import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import BreakFastImg from "../../../images/breakfast-img.jpg"

function Breakfast() {
    const breakfast = [
        {
            id: 1,
            name: 'Waffle Nachos',
            description: 'buttermilk waffles, olive oil, chorizo, andouille sausage ,eggs , cheese',
            price: 'Rs.60/-'
        },
        {
            id: 2,
            name: 'B.E.C Breakfast',
            description: 'patties, tortillas, strips bacon, eggs, olive oil, hot sauce',
            price: 'Rs.80/-'
        },
        {
            id: 3,
            name: 'Burrito',
            description: 'tortilla, egg, cheese, potatoes, pork meat',
            price: 'Rs.100/-'
        }
    ];
    return (

        <div className='breakfasts my-5'>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5
       text-uppercase fw-bold text-success'>Breakfast</h2>
                <div className='row flex-column-reverse flex-lg-row'>
                    <div className='col-lg-6 d-flex 
          justify-content-center'>
                        <img src={BreakFastImg} className='object-fit-cover img-fluid w-75 mt-4 mt-lg-0'/>
                    </div>
                    <div className='col-lg-6 d-flex flex-column 
        justify-content-around'>
                        {breakfast.map((breakfast) => (
                            <div key={breakfast.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3 '>
                                            {breakfast.name}
                                        </CardTitle>
                                        <CardText className='text-center fs-5'>
                                            {breakfast.description}
                                        </CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'>
                                            {breakfast.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breakfast