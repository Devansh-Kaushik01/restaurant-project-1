import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import DinnerImg from "../../../images/dinner-img.jpg"

function Dinner() {
  const dinner = [
    {
      id: 1,
      name: 'Indian Butter Chickpeas',
      description: 'unsalted butter, onion, tomato paste, serrano chile, seeded , peeled ginger, chickpeas, baking soda ,heavy cream ,rice, naan',
      price: 'Rs.100/-'
    },
    {
      id: 2,
      name: 'Sesame Tofu & Broccoli',
      description: 'extra-firm tofu,broccoli,scallions,cloves garlic, soy sauce, chili crisp, rice vinegar, cornstarch',
      price: 'Rs.150/-'
    },
    {
      id: 3,
      name: 'Vegetable Paella',
      description: 'mushrooms, zucchini, onion, paprika, tomatoes, paella rice, piquillo peppers, spinach, vegetable broth',
      price: 'Rs.200/-'
    }
  ];
  return (
    <div className='dinner my-5'>
      <div className='container'>
        <h2 className='text-center fs-1 mb-4 mb-lg-5
                 text-uppercase fw-bold text-success'>Dinner</h2>
        <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6 d-flex 
                    justify-content-center'>
            <img src={DinnerImg} className='object-fit-cover'/>
          </div>
          <div className='col-lg-6 d-flex flex-column 
                   justify-content-around'>
            {dinner.map((dinner) => (
              <div key={dinner.id}>
                <Card className='border-0'>
                  <CardBody>
                    <CardTitle className='text-center fs-3'>
                      {dinner.name}
                    </CardTitle>
                    <CardText className='text-center fs-5'>
                      {dinner.description}
                    </CardText>
                    <CardText className='text-center fs-3 fw-bold text-success'>
                      {dinner.price}
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

export default Dinner
