import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

function Header() {
  const {wishlist}=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-primary">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} className='text-decoration-none text-dark'>
              <i className="fa-solid fa-cart-shopping me-2 fa-lg" style={{ color: "#000" }}></i>
              ReduxCart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link className='btn me-3 bg-dark'>
                <input type="text" onChange={(e)=>{dispatch(searchProduct(e.target.value.toLowerCase()))}} placeholder='Search' />
              </Nav.Link>
              <Nav.Link className='btn border border-dark me-3 bg-dark'>
                <Link to={'/wish'} className='text-decoration-none text-light'>
                  <i className="fa-solid fa-heart me-1" style={{ color: "#db0202" }}></i>
                  WishList
                  <Badge bg="dark">{wishlist?.length}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link className='btn border border-dark me-3 bg-dark'>
                <Link to={'/cart'} className='text-decoration-none text-light'>
                  <i className="fa-solid fa-cart-shopping me-1" style={{ color: "#03a9fc" }}></i>
                  Cart
                  <Badge bg="dark">{cart?.length}</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header