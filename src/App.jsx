import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './ParentComponent'

function App() {
  return (
    <div className='main-div'>
       <ParentComponent/>
    </div>
   
  )
}

export default App
