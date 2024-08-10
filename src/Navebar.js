import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'

import './Navebar.css'

function Navebar() {
    const navigate = useNavigate()

  return (
    <>
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary' bg='light' data-bs-theme='light'>
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>Wave Wander</Navbar.Brand>

                <Nav className='me-auto'>
                    <Nav.Item>
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <Outlet />
    </>
  )
}

export default Navebar