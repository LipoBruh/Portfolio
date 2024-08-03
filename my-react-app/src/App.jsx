import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ProfileName } from './components/ProfileName'
import { Body } from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container bg-danger'>
      <Header/>
      <Body/>
    </div>
  )
}

export default App
