import React from 'react'
import Table from 'react-bootstrap/Table';

function Cart() {
    return (
        <div className='container mt-5'>
            <div className="row mt-5">
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
                            <tr className='text-white'>
                                <td className='text-white'>1</td>
                                <td className='text-white'>iphone</td>
                                <td><img style={{height:'100px'}} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></td>
                                <td className='text-white'>$500</td>
                                <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                            </tr>
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
            </div>
        </div>
    )
}

export default Cart