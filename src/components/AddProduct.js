import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
  const [notes,setNotes]=useState([])
  const [note,setNote]=useState([])

  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})

}
// add the new product function
  const addProducts=async (title,description,price,rating)=>{

    //API call

    const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          //"auth-token":localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({title,description,price,rating}), // body data type must match "Content-Type" header
      });
      
      const note=await response.json();
      
      setNotes(notes.concat(note))
    // console.log("Adding a new note")
    //const note=json
    alert(note.id)
    console.log(note.id)

    

  }



  return (
    <div className='container py-5'>
      <div className="row">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Name</label>
        <input type="text" className="form-control" id="title" value={note.title} onChange={onChange} placeholder="Enter Product name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="description" value={note.description} onChange={onChange} placeholder="Enter Product Info"/>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input type="text" className="form-control" id="price" value={note.price} onChange={onChange} placeholder="Enter Product Price"/>
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <input type="text" className="form-control" id="rating" value={note.rating} onChange={onChange}placeholder="Enter Product Rating"/>
      </div>

      </div>
      <div className='d-flex justify-content-center my-2'>
      <button className=" d-flex btn btn-outline-dark px-5 justify-contyent-center" onClick={()=>{addProducts()}} >Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct
