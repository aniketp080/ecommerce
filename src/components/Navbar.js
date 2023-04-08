import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const state=useSelector((state)=>state.handleCart)
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/" >eCommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/addproduct">Add a Product</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <p className="mx-2">Aniket Patil</p>
                        <img src="https://th.bing.com/th/id/OIP.KeIijA181Ged9wRqNlkO_QHaHN?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" style={{width:"50px",height:"50px"}}/>
                        <Link to="/cart" className="btn btn-outline-dark ms-2"><i className="fa-sharp fa-solid fa-cart-shopping"></i>Cart({state.length})</Link>
                        
                    </form>
                    </div>
                </div>
        </nav>




      
    </div>
  )
}

export default Navbar
