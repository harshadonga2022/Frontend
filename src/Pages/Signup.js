import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; //for message

function Signup() {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try {
      const user = {
        firstname: name,
        mobile_no: mobileNo,
        password: password
      }
      const response = await axios.post('http://localhost:3001/users/register', user);
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
            <Form className='bg-light border p-5' onSubmit={Register} >
              <Form.Group className="mb-3" >
                <Form.Label>username</Form.Label>
                <Form.Control type="text" name='username' value={name} onChange={(e) => { setName(e.target.value) }} required placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="number" name='mobileNo' value={mobileNo} onChange={(e) => { setMobileNo(e.target.value) }} required placeholder="Enter Mobile Number" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required placeholder="Password" />
              </Form.Group>
              <Button type="submit">Submit</Button>
              <p className='my-4'>Already have an account? <Link to='/login'>Login</Link> Here</p>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}


export default Signup