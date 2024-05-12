import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk, onNavigatePrev, onNavigateNext } from '../redux/slices/productSlice'
import Spinner from 'react-bootstrap/Spinner';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const dispatch = useDispatch()
  const { product, loading, error, productsPerPage, currentPage } = useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductThunk())
  }, [])

  const totalPages = Math.ceil(product?.length / productsPerPage)
  const indexofLastElement = currentPage * productsPerPage
  const indexOfFirstElement = indexofLastElement - productsPerPage
  const validCards = product?.slice(indexOfFirstElement, indexofLastElement)

  const navigatePrev = () => {
    if (currentPage != 1) {
      dispatch(onNavigatePrev())
    }
  }
  const navigateNext = () => {
    if (currentPage != totalPages) {
      dispatch(onNavigateNext())
    }
  }


  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">ReduxCart</h1>
            <p className="lead fw-normal text-white-50 mb-0">Shop whatever you desire !!!</p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              !loading && error &&
              <div className='w-50 text-center text-danger display-4'>{error}</div>
            }
            {

              loading ?
                <div className='d-flex justify-content-center'>
                  <Spinner
                    as="span"
                    animation="border"
                    size="xl"
                    role="status"
                    aria-hidden="true"
                  />

                  <h2 className="ms-2">Loading...</h2>
                </div>

                : !error &&

                validCards.map(item => (
                  <div className="col mb-5">
                    <div className="card h-100">
                      <Link to={`/detail/${item?.id}`}>
                        <img className="card-img-top" height={'180px'} src={item.thumbnail} alt="..." />
                      </Link>
                      <div className="card-body p-4">
                        <div className="text-center mb-3">
                          <h5 className="fw-bolder"> {item?.title.slice(0, 10)}...</h5>
                          ₹{item?.price}
                        </div>
                        <div className='d-flex justify-content-evenly'>
                          <button className='btn border' onClick={() => { dispatch(addToWishList(item)) }}>
                            <i className="fa-solid fa-heart me-1" style={{ color: "#db0202" }}></i>
                          </button>
                          <button className='btn border' onClick={() => { dispatch(addToCart(item)) }}>
                            <i className="fa-solid fa-cart-shopping me-1" style={{ color: "#03a9fc" }}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                ))
            }

          </div>
        </div>
        <div className='text-center'>
          <button className='btn' onClick={navigatePrev}><i className="fa-solid fa-angles-left"></i></button>
          <span>{currentPage} / {totalPages}</span>
          <button className='btn' onClick={navigateNext}><i className="fa-solid fa-angles-right"></i></button>
        </div>
      </section>
    </>
  )
}

export default Home