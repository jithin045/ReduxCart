import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <><div>
      <div className='d-flex justify-content-between bg-dark text-light p-3'>
        <div className="w-25">
          <h3>ReduxCart 2024</h3>
          <p style={{ textAlign: 'justify' }}> Enjoy hassle-free shopping with easy returns and dedicated customer support. Stay in the loop with our newsletter for insider access to sales and new arrivals. Connect with us on social media for daily inspiration and exclusive deals. Your satisfaction is our commitment,
            so shop confidently and elevate your lifestyle with us today.</p>
        </div>
        <div className="w-25 text-center">
          <h3>Links</h3>
          <Link to={'/wish'} className='d-block mb-3 mt-3'>WishList</Link>
          <Link to={'/cart'}>Cart</Link>
        </div>
        <div className="w-25">
          <h3>References</h3>
          <a href="https://react-bootstrap.netlify.app/" className='d-block mt-3 mb-3'>React Bootstrap</a>
          <a href="https://react.dev/" className='d-block mb-3'>React</a>
          <a href="https://redux.js.org/">Redux</a>
        </div>
        <div className="w-25">
          <h3>Contact Us</h3>
          <p>Submit your email,so we can contact you...</p>
          <input type="email" className='form-control ' placeholder='Enter email id' />
          <button className='btn btn-outline-light mt-3 btn-dark' >Submit</button>
        </div>
      </div>
      <h6 className='text-center'>ReduxCart 2024 &copy; All rights reserved.</h6>
    </div>

    </>
  )
}

export default Footer