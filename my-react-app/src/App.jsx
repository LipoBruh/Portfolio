import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ProfileName } from './components/ProfileName'
import { Body } from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="" >  
        <div className='container'>
          <Header/>
          <Body/>
        </div>
      </div>
  )
}

export default App
