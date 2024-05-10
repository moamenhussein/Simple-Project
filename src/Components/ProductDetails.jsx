import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {productId} = useParams();
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json()).then((product) => {
    setProducts(product)
    })
  }, [])
  return (
    <>
      <h1>Product Details #{productId}</h1>
      <img src={products.image} alt=''/>
      <h3 className='mt-4'>{products.title}</h3>
      <p className='mt-4'>{products.description}</p>
      <h5 className='mt-4'>{products.category}</h5>
      <h2 className='mt-4'>{products.price}$</h2>
    </>
  )
}

export default ProductDetails
