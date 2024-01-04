import React, { useEffect } from 'react'
import { Row, Col,Card,Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/Slices/productSlices'
import { addToWhishlist } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'

function Home() {
    const dispatch=useDispatch()
    const {loading,products,error}=useSelector((state)=>state.productSlices)
    const {wishlist}=useSelector(state=>state.wishlistSlice)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

   const handleWishlist=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
        alert("product alredy added to wishlist")
    }else{
        dispatch(addToWhishlist(product))
    }
   }
    return (
        <div style={{ marginTop: '100px' }}>
          {
            loading?<div className='text-center mt-5'><Spinner animation='border' variant='danger'/>Loading...</div>: 
             <Row className='container-fluid '>
           {
            products.length>0&& products.map((product,index)=>(
                <Col key={index} className='mb-3' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }} className=' shadow'>
                    <Link to={`view/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
                    <Card.Body>
                        <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                        <div className='d-flex justify-content-between'>
                            <Button onClick={()=>handleWishlist(product)} className='btn btn-light fs-5 '><i className='fa-solid fa-heart text-danger'></i></Button>
                            <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light fs-5'><i className='fa-solid fa-cart-plus text-success'></i></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            ))
           }
        </Row>
          }
        </div>
    )
}

export default Home