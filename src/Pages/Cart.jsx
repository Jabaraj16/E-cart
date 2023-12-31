import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {
    const cart=useSelector(state=>state.cartReducer)
    return (
        <div className='container mt-5'>
            {
                cart?.length>0?<div className="row mt-5">
                <div className="col-lg-8">
                    <Table striped bordered hover className='bg-light mt-5' >
                        <thead >
                            <tr>
                                <th className='text-white'>#</th>
                                <th className='text-white'>Product</th>
                                <th className='text-white'>image</th>
                                <th className='text-white'>Price</th>
                                <th className='text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            cart&&cart.map((items,index)=>(
                                <tr key={index}className='text-white'>
                                <td className='text-white'>{index+1}</td>
                                <td className='text-white'>{items.title}</td>
                                <td><img style={{height:'100px'}} src={items.thumbnail} alt="" /></td>
                                <td className='text-white'>${items.price}</td>
                                <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                            </tr>
                            ))
                           }
                        </tbody>
                    </Table>
                </div>
                <div className="col-lg-4 mt-5">
                    <div className=' border  shadow rounded p-4'>
                        <h5>Total product : <span className='fw-bolder'>3</span></h5>
                        <h5>Total Amount :<span className='fw-bolder text-dander'>$1000</span></h5>
                        <hr />
                        <div className="d-flex w-100">
                        <button className='btn btn-success w-100'>Checkout</button>
                    </div>
                    </div>
                    
                </div>
            </div>:<div><h1>Cart is empty</h1></div>
            }
        </div>
    )
}

export default Cart