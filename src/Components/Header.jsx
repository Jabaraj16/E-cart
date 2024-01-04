import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const [whishlistCount,setWishlistCount]=useState(0)
  const [cartCount,setCartCount]=useState(0)
  const whishlist = useSelector(state=>state.wishlistSlice.wishlist)
const cart=useSelector(state=>state.cartReducer)
  useEffect(()=>{
    setWishlistCount(whishlist?.length)
    setCartCount(cart?.length)
  },[whishlist,cart])
  
  return (
    <div>
        <Navbar style={{position:'fixed',width:'100%',zIndex:'1'}} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none'}}><span  className='text-black'><i className='fa-solid fa-cart-shopping me-2'></i>E-cart</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded align-items-center' ><Link to={"/wishlist"} style={{textDecoration:'none'}}>
            <i className='fa-solid fa-heart text-danger'></i><span className='ms-3'>Wishlist</span>
            <Badge className='ms-3 rounded bg-light'>{whishlistCount}</Badge>
            </Link></Nav.Link>
            <Nav.Link className='btn border rounded ms-4' ><Link to={"/cart"} style={{textDecoration:'none'}}><i className='fa-solid fa-cart-shopping'></i><span className='ms-3 text-info'>Cart</span>
            <Badge className='ms-3 rounded bg-light'>{cartCount}</Badge>
            </Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header