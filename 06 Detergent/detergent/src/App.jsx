import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './component/Product'

function App() {
  const products=[
    {
      id:"p1",
      title:"Nirma",
      date: new Date(2021,2,2)
    },
    {
      id:"p2",
      title:"Sirf Excel",
      date: new Date(2022,4,1)
    },
    {
      id:"p3",
      title:"Tide",
      date: new Date(2024,2,12)
    },
    {
      id:"p4",
      title:"Ariel",
      date: new Date(2025,8,9)
    },
  ]


  return (
    <>
    <Product items={products}></Product>
     
    </>
  )
}

export default App
