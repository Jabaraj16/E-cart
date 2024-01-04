import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWhishlist } from '../Redux/Slices/wishlistSlice'

function View() {
    const {id}=useParams()
    const {loading}=useSelector((state)=>state.productSlices)
    const [product,setProduct]=useState({}) 
    const dispatch=useDispatch()
    const {wishlist}=useSelector(state=>state.wishlistSlice)

    useEffect(()=>{
        const products=JSON.parse(localStorage.getItem("products"))
        setProduct(products.find(product=>product.id==id))
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
        <div className='container mt-5'>
           {
            loading?<div className='text-center mt-5'><Spinner animation='border' variant='danger'/>Loading...</div>: <div className="row mt-3">
            <div className="col-md-4 mt-5" >
                <img style={{height:'200px',width:'100%'}} src={product.thumbnail} alt="" />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6 mt-5">
                <p>PID:{product.id}</p>
                <h1>{product.title}</h1>
                <h5 className='fw-bolder'>${product.price}</h5>
                <p><span className='fw-bolder'>Description :</span>{product.description}</p>
                <div className='d-flex justify-content-between'>
                    <Button onClick={()=>handleWishlist(product)} className='btn btn-light fs-5 '><i className='fa-solid fa-heart text-danger'></i></Button>
                    <Button className='btn btn-light fs-5'><i className='fa-solid fa-cart-plus text-success'></i></Button>
                </div>
            </div>
        </div>
           }
        </div>
    )
}

export default View