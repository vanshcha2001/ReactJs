import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    username:"bbansh",
    age:18,
  }

  return (
    <>
      <h1 className='bg-gray-950'>Tailwind CSS</h1>
      <Card username="honey" btnclick="click me"/>
      {/* <Card channel="vansh" sameObj={obj}/> */}
      <Card username="banshh" btnclick="visit me"/>
      {/* ye card jo value humne pass kri issi ko Card.jsx mein props bolte hai */}
    </>
  )
}

export default App
