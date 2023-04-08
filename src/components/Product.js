import React, { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Product = (props) => {
  

  const dispatch=useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product))

    }
    
  
    const [data,setData]=useState([])
    const[filter,setFilter]=useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted=true

    

      useEffect(() => {
        //api call to fetch the product from API
        const getProducts=async()=>{
          setLoading(true)
          const response=await fetch("https://fakestoreapi.com/products");
          if(componentMounted){
            setData(await response.clone().json());
            setFilter(await response.json())
            setLoading(false);
            
          }
          return()=>{
            componentMounted=false;
          }

        }

        getProducts()
        
          // eslint-disable-next-line
      }, [])
//used a loader
      const Loading=()=>{
        return(
          <>
          <div className="col-md-3">
            <Skeleton height={350}/>
          </div>
          </>
        )

      }

      //when deleteing the product delete method 
      const deleteNote=async(id)=>{
        //API call
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
             
            },
            
          });
          const json=response.json()
          
        const newNotes=data.filter((note)=>{return note._id!==id})
        setData(newNotes)
        alert("Item deleted successfully with id:--"+id+"\n\n\n\nAs i have use an online API that's why it is not deleting the product from UI")
    
      }

      //display product on UI
      const ShowProduct=()=>{
        
        return(
          <>
          
        {filter.map((product)=>{
          return(
            <>
            <div className="col-md-3 my-2" key={product.id}>
            <div className="card h-100 text-center p-4" key={product.id}  >
              <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
              <div className="card-body" key={product.id}>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text lead fw-bold"> $ {product.price}</p>
                <p className="card-text lead fw-bold"><i className="fa-sharp fa-solid fa-star"></i>{product.rating.rate}</p>
                <p className="card-text">{product.description?product.description.slice(0,50):product.description}...</p>
                <Link to={`/products/${product.id}`} className="btn btn-outline-dark my-1 ms-2">Buy Now</Link>
                <Link  onClick={()=>addProduct(product)} className="btn btn-outline-dark my-1 ms-2">Add to Cart</Link>
                <div>
                <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(product.id)}}></i>
                <i className="fa-solid fa-pen-to-square mx-2" ></i>

                </div>
                
              </div>
            </div>

            </div>

            </>
          )
        })}
          </>
        )
        
        
        
        
          
      }
     
//sorting function to sort in highest and lowest
      const Sorting=(e)=>{
        let array=[]
       
        

        const sortCompareLowest=(a,b)=>{
          return a.price-b.price;
        }
        const sortCompareHighest=(a,b)=>{
          return b.price-a.price;
        }
        if(e.target.value==="lowest"){
          console.log(e.target.value)
          for(let item of filter){
            array.push(item)
            
          }
          array.sort(sortCompareLowest)
          console.log(array)
          
      }
        else if(e.target.value==="highest"){
          console.log(e.target.value)
          for(let item of filter){
            array.push(item)
            
          }
          array.sort(sortCompareHighest)
          console.log(array)
          
        }else{
          console.log(e.target.value)
          for(let item of filter){
            array.push(item)
            
          }
          console.log(array)

        }
        
      }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center' >Latest Products</h1>
            <form >
            <label htmlFor="sort"></label>
            <select className="d-flex "name='sort' id="sort" onClick={Sorting}>
              <option value="selectsort">Select Sort Type</option>
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
            </select>
          </form>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading?<Loading/>:<ShowProduct /> }
        </div>
      </div>
    </div>
    

  
  )
}

export default Product



