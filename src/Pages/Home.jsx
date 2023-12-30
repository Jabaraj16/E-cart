import React from 'react'
import { Row, Col,Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{ marginTop: '100px' }} >
            <Row className='container-fluid '>
                <Col className='mb-3' sm={12} md={6} lg={4} xl={3}>
                    <Card style={{ width: '18rem' }} className=' shadow'>
                        <Link to={'/view/1'}><Card.Img variant="top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" /></Link>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex justify-content-between'>
                                <Button className='btn btn-light fs-5 '><i className='fa-solid fa-heart text-danger'></i></Button>
                                <Button className='btn btn-light fs-5'><i className='fa-solid fa-cart-plus text-success'></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home