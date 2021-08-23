import React, { useRef } from 'react'
import { Container, Form, Button,Card } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '80vh',backgroundImage: `url(https://images.pexels.com/photos/3571094/pexels-photo-3571094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200)` }}>
        <Card style={{width:"25rem"}}>
            <Card.Body>
                <Form onSubmit={handleSubmit} className="w-100">
                    <Form.Group>
                        <Form.Label><Card.Title>Enter Your Id</Card.Title></Form.Label>
                        <Form.Control type="text" ref={idRef} required/>
                    </Form.Group>   
                    <Button type="submit" className="m-2">Login</Button>
                    <Button onClick={createNewId} variant="secondary" className="m-2">Create A New Id</Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}
