// import './App.css'

// function App() {
//   let counter=10;
//   const addValue=()=>{
//     // console.log("value added",Math.random())
//     counter=counter+1
//     console.log("CLICKED",counter)
//   }
//   return (
//     <>
//       <h1>Why we need Hook?</h1>
//       <h3>counter value = {counter}</h3>
//       <br />
//       <button onClick={addValue}>add value = {counter}</button>
//       <br />
//       <button>remove value = {counter}</button>
//     </>
//   )
// }

// export default App

// ab jo upar pura apan ne function bnaya sab kara toh usme dikkt kya a rhi
// apan jab button pr click kr rhe toh counter ki value increase toh ho rhi par UI mein show nhi ho rhi
// kyuki yha REACT bolta ki bhai tum apn kaam kro mein UI pr dhyaan dunga
// Jitne bhi variable bnane bna lo aur behind the scene kuch bhi kro pr UI pr mera control hai
// Ab variable itne sare define karoge toh ab javascript toh hai nhi ki har button pr document. ye karo vo kro
// Tab react ne bola ajao mein tumhe ek tarika deta hun usse kr skte ho ye kaam

// React ne HOOKS diye fir apan ko
// ab ek variable ko har jgh pr control hooks krega
// jaha bhi variable hai bs tum define kr do bake hooks dekh lega

// hence UI updation ko React control krta hai

import './App.css'
import { useState } from 'react'; //import hooks

// let [counter,setCounter]=useState(15) 
//counter : vhi let counter, setCounter=function
// ye setCounter function mein jo bhi hoga counter m aygi aur fir jaha bhi counter hoga vaha update ho jayga



function App() {
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Why we need Hook?</h1>
      <h3>counter value = {counter}</h3>
      <br />
      <button onClick={addValue}>add value = {counter}</button>
      <br />
      <button onClick={removeValue}>remove value = {counter}</button>
    </>
  )
}

export default App