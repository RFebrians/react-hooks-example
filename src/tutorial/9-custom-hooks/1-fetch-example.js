import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// URL API , 
const url = 'https://backendrest3.herokuapp.com/books'

const Example = () => {
  const { loading, products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
