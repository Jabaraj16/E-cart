import React from 'react'
import { Row, Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWhishlist } from '../Redux/Slices/wishlistSlice'
function Wishlist() {
    const dispatch=useDispatch()
    const wishlist=useSelector(state=>state.wishlistSlice.wishlist)
  return (
    <div style={{ marginTop: '100px' }}>
         <Row className='container-fluid '>
               {
                wishlist?.length>0?wishlist.map(product=>(
                    <Col className='mb-3' sm={12} md={6} lg={4} xl={3}>
                        <Card style={{ width: '18rem' }} className=' shadow'>
                    <Link to={`view/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
                    <Card.Body>
                        <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                        <div className='d-flex justify-content-between'>
                            <Button onClick={()=>dispatch(removeFromWhishlist(product))} className='btn btn-light fs-5 '><i className='fa-solid fa-heart text-danger'></i></Button>
                            <Button className='btn btn-light fs-5'><i className='fa-solid fa-cart-plus text-success'></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                    </Col>
                ))
                :<div style={{height:'500px'}} className='d-flex justify-content-center w-100 align-items-center' ><h1 className=' d-flex justify-content-center w-100  text-center'>Wishlist is empty</h1></div>
               }
            </Row>
    </div>
  )
}

export default Wishlist