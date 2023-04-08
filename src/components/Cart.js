import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { delCart } from '../redux/action'

const Cart = () => {

    const state=useSelector((state)=> state.handleCart)
    
    const dispatch=useDispatch()
    const handleClose=(item)=>{
        dispatch(delCart(item))


    }
    //display the cart item on UI
    const cartItems=(cartItem)=>{
        return(
            <>
            <div className=" my-5 container bg-light py-5" key={cartItem.id}>
                
                <div className="row">
                    <div className="col-md-4">
                        <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                    </div>
                    <div className="col-md-4">
                        <h4>{cartItem.title}</h4>
                        <p className='lead fw-bolder'>
                    Rating{cartItem.rating && cartItem.rating.rate}
                    <i className="fa-sharp fa-solid fa-star"></i>
                     </p>
                     <h3 className='display-6 fw-bold my-4'>
                         $ {cartItem.price}
                    </h3>
                    <button className="btn btn-outline-dark mx-2" onClick={()=>handleClose(cartItem)}>Remove from Cart</button>  
                    </div>
                    
                </div>
            </div>
            
            
            
            
            
            
            </>
        )

      }
    //   when the cart is empty
      const emptyCart=()=>{
        return(
            <div className="px-4 my-4 bg-light rounded-3">
                <div className="constainer py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>

        )
      }
  return (
    <>
     {state.length ===0 && emptyCart()}
    {state.length !==0 && state.map(cartItems)}

      
    </>
  )
}
 
export default Cart
 