import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'
import { addToWishList } from '../redux/slices/wishlistSlice'

function Details() {
  const [data, setData] = useState([])
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(id);
    setData(JSON.parse(localStorage.getItem("response")).find(item => item.id == id))
  }, [])

  console.log(data);


  return (
    <>
      <div className='p-5 container'>
        <Row>
          < Col sm={12} md={6} lg={6} >
            <img className='img-fluid' height={'500px'} src={data?.thumbnail} alt="img" />
          </Col>
          <Col sm={12} md={6} lg={6} >
            <div className='mb-3'>{data?.id}</div>
            <h1 className='mb-1'>{data?.title}</h1>
            <div className='mb-3'>
              <span>₹{data?.price}</span>
            </div>
            <p style={{ textAlign: 'justify' }}>{data?.description}
            </p>
            <div className="d-flex justify-content-evenly">
              <button className='btn btn-lg border' onClick={() => { dispatch(addToWishList(data)) }}>
                <i className="fa-solid fa-heart-circle-plus me-1" style={{ color: "#db0202" }}></i>
              </button>
              <button className='btn btn-lg border' onClick={() => { dispatch(addToCart(data)) }}>
                <i className="fa-solid fa-cart-shopping me-1" style={{ color: "#00c96b" }}></i>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Details