import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import DessertImg from "../../../images/dessert-img.jpg"

function Dessert() {
  const dessert = [
    {
        id: 1,
        name: 'Snickerdoodle Blondie',
        description: 'butter, eggs, pure vanilla extract, flour, cinnamon, baking powder',
        price: 'Rs.50/-'
    },
    {
        id: 2,
        name: 'Strawberry Crunch Poke Cake',
        description: 'strawberry jell, heavy cream, cream cheese, pure vanilla extract, vanilla sandwich cookies',
        price: 'Rs.100/-'
    },
    {
        id: 3,
        name: 'Flourless Chocolate Coconut Cake',
        description: 'unsalted butter, semisweet chocolate chips, eggs, pure vanilla extract, unsweetened shredded coconut, toasted',
        price: 'Rs.150/-'
    }
];
  return (
    <div className='dessert bg-dark text-light py-5'>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5
       text-uppercase fw-bold text-success'>Dessert</h2>
                <div className='row'>
                <div className='col-lg-6 d-flex flex-column 
        justify-content-around mb-5'>
                        {dessert.map((dessert) => (
                            <div key={dessert.id}>
                                <Card className='border-0 bg-dark text-light'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'>
                                            {dessert.name}
                                        </CardTitle>
                                        <CardText className='text-center fs-5'>
                                            {dessert.description}
                                        </CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'>
                                            {dessert.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className='col-lg-6 d-flex 
          justify-content-center'>
                        <img src={DessertImg} className='object-fit-cover img-fluid w-75 mt-4 mt-lg-0 mb-5' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dessert