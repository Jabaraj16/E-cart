import React from 'react'
import { Button } from 'react-bootstrap'

function View() {
    return (
        <div className='container mt-4'>
            <div className="row mt-3">
                <div className="col-md-4 mt-5" >
                    <img style={{height:'200px',width:'100%'}} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-6 mt-5">
                    <p>PID:yugfjeurkfj</p>
                    <h1>Title</h1>
                    <h5 className='fw-bolder'>$500</h5>
                    <p><span className='fw-bolder'>Description :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio, minus doloremque architecto provident, ad odit soluta expedita nisi quas ullam at in blanditiis facilis quidem aperiam rerum minima mollitia!</p>
                    <div className='d-flex justify-content-between'>
                        <Button className='btn btn-light fs-5 '><i className='fa-solid fa-heart text-danger'></i></Button>
                        <Button className='btn btn-light fs-5'><i className='fa-solid fa-cart-plus text-success'></i></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View