import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; //for message

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

const loginForm = async (e) => {
  try {
    const user = {
      firstname: name,
      password: password
    }
    const response = await axios.get('http://localhost:3001/users/login', user);
    await localStorage.setItem('userToken', response.data.token);
    toast.success(response.data.message) //for message
  } catch (e) {
    toast.error(e.response.data.message) //for message
  }
}
 
  return (
    <>
    <Container fluid>
        <Row>
          <Col></Col>
          <Col >
            <Form className='bg-light border p-5'>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} required placeholder="Enter userId" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required placeholder="Password" />
              </Form.Group>
              <Button type="submit" onClick={loginForm()}>Login</Button>
              <p className='my-4'>Already have an account? <Link to='/signup'>Signup</Link> Here</p>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Login