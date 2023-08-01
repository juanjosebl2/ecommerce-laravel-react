import React from 'react'
import { products as data } from '../data/products'
import { Product } from '../components/Product'
import useStore from '../hooks/useStore' 


export const Home = () => {

  const {categorieCurrent} = useStore();

  const products = data.filter(product => product.category_id === categorieCurrent.id)

  return (
    <>
      <h1 className='text-4xl font-black'>{categorieCurrent.name}</h1>
      <p className=' text-2xl my-10'>
        Choose and customize your order
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
