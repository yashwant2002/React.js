import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {


  return (
    <>
    <h1 className='bg-green-400'>tailwind & Props test</h1>
    <Card username='Yashwant Sahu' />
    <Card />
    </>
  )
}

export default App
