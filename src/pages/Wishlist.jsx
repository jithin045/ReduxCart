import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const { wishlist } = useSelector((state) => state.wishlistReducer)
  console.log(wishlist);
  const dispatch=useDispatch()

const handleAddToCart=(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWishList(product.id))
}

  return (
    <>
      <div className='p-5 container'>
        <Row>
          {
            wishlist?.length > 0 ?
              wishlist.map(item => (
                <Col sm={12} md={6} lg={4} xl={2} >
                  <Card>
                    <Card.Img height={'150px'} src={item.thumbnail} />
                    <Card.Body className="text-center mb-1">
                      <Card.Title className="fw-bolder">{item?.title.slice(0, 10)}...</Card.Title>
                      <Card.Text>₹{item.price}</Card.Text>
                      <div className="d-flex justify-content-evenly">
                        <button className='btn border' onClick={()=>{dispatch(removeFromWishList(item?.id))}}>
                          <i className="fa-solid fa-heart-circle-xmark " style={{ color: "#db0202" }}></i>
                        </button>
                        <button className='btn border' onClick={()=>handleAddToCart(item)}>
                          <i className="fa-solid fa-cart-plus" style={{ color: "#00c96b" }}></i>
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )) :
              <h1>No Products in Wishlist</h1>
          }

        </Row>
      </div>
    </>
  )
}

export default Wishlist