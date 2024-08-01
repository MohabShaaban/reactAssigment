import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Star2 from '../Star/Star2';


export default function Contact() {
    return (
        <div className='container portfolio'>
                <h1 className='fs-1 mb-4'>CONTACT SECTION</h1>
                <Star2/>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Control type="text"
                        placeholder="Name" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="number" placeholder="Age" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="email"
                        placeholder="Email" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="password"
                        placeholder="Password:" />
                </Form.Group>
                <Button className='cstmbtn mb-5' type="submit">
                    Send Message
                </Button>
            </Form>
        </div>
    )
}
