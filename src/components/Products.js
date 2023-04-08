import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { Link, useParams } from 'react-router-dom'

const Products = () => {

    const{id}=useParams();
    const[product,setProduct]=useState([])
    const[loading,setLoading]=useState(false)

    const dispatch=useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product))

    }
    

    useEffect(()=>{
        const getProduct=async()=>{ 
            setLoading(true)
            const response=await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)

        }
        getProduct();
    },[id])

    const Loading=()=>{
        return(
          <>
          Loading...
          </>
        )

      }

      const ShowProduct=()=>{
        return(
            <>
            <div className="col-md-6" key={product.id}>
            <img src={product.image} width="400px" alt={product.title} height="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating{product.rating && product.rating.rate}
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className='lead'>
                    {product.description}
                </p>
                <button className="btn btn-outline-dark mx-2" onClick={()=>addProduct(product)}>Add to Cart</button>
                <Link to="/cart" className="btn btn-dark mx-2">Go to Cart</Link>
            
            
            
            </div>
            
            </>
        )

      }
  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading?<Loading/>:<ShowProduct key={id}/>}
            </div>
        </div>
      
    </div>
  )
}

export default Products
