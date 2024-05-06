// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    /** Using Shorthand or fragment syntax -- <>...</> */
    <>
      <Header />
      <div className="products-container">
        <img
          className="products-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </>
  )
}
export default Products
