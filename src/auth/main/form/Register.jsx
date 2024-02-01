import React from 'react'
import { Form } from 'react-bootstrap'

function Register() {
  return (
   <>
   <Form>
    <Form.Group className='row mb-3'>
         <div className='col-md-6'>
            <Form.Label htmlFor='first-name'>
                First Name:-
            </Form.Label>
            <Form.Control type='text' id='first-name' />
         </div>
         <div className='col-md-6'>
            <Form.Label htmlFor='last-name'>
                Last Name:-
            </Form.Label>
            <Form.Control type='text' id='last-name' />
         </div>
    </Form.Group>
    <Form.Group className='row mb-3'>
         <div className='col-md-6'>
            <Form.Label htmlFor='email-address'>
                 Email Address:-
            </Form.Label>
            <Form.Control type='email' id='email-address' />
         </div>
         <div className='col-md-6'>
            <Form.Label htmlFor='phone-number'>
                Phone Number:-
            </Form.Label>
            <Form.Control type='tel' id='phone-number' />
         </div>
    </Form.Group>
    <button type='submit' className='btn btn-success btn-lg'>Submit</button>
   </Form>
   </>
  )
}

export default Register