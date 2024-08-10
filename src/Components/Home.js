import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate()

    const [ data, setData ] = useState([])
    console.log(data);
    
    useEffect(() => {
        axios
            .get('http://localhost:8080/data')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const [ hover, setHover ] = useState(false)

    useEffect(() => {
        if(hover) setDisplay('block')
        else if(!hover) setDisplay('none')
    }, [hover])

    const [ display, setDisplay ] = useState('none')

  return (
    <>
        <Container>
            <Row>
                <Col className='main-box'>
                    <h6>Our Portfolio</h6>
                    
                    <h3>Our Latest Project</h3>

                    <div className='text'>
                        <p>Providing good quality customer experience and support is as important and pivotal as offering top grade product or service to your consumers. However, it has been noted on various occasions that some entities do not have a customer.</p>

                        <div className='btn'>
                            <button>View More</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container fluid>
            <Row className='boxes-row'>
                {
                    data && data.map((item, index) => {
                        return(
                            <Col sm='4' className='boxes-col' key={index} onClick={e => { e.preventDefault(); navigate(`/preview/${item._id}`) }} onMouseOver={e => { e.preventDefault(); setHover(true) }} onMouseLeave={e => { e.preventDefault(); setHover(false) }}>
                                <img src='../website.jpg' />
                                <p style={{'display': display}}>{item.name}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </>
  )
}

export default Home