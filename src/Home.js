import React from 'react'
import Product from './components/Product'


//display the image on UI
const Home = () => {
  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0">
            <img src="https://th.bing.com/th/id/OIP.GFWEZUWvPJAxrtykZiZTAQHaFp?pid=ImgDet&rs=1" className="card-img" alt="Background" height="550px"/>
            <div className="card-img-overlay d-flex flex-column ">
                <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                <p className="card-text">CHECKOUT TRENDY FASHION's</p>

                </div>
                
                
            </div>
        </div>
        <Product/>
      
    </div>
  )
}

export default Home
