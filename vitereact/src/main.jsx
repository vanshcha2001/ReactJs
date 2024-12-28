import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'


// 1.ab humne check kara ki agar App.js ek object hi bna rha hai toh hum yhi par object bna kr call krte hai n
function Myapp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}

// 2.ab humne kaha ki hum fir apna custom element jo humne bnaya vo bhi toh run kr skte?
// chlo dekhte hai
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        targer:'_blank'
    },
    children:"click here "
    }
    // run kara pr kuch show hi nhi hua
    // esa kyu hua?
// NOTE: ye isliye kyuki humne apne hissab se key value pair diye hai
        // pr jo react hai usme phle se hi define hai ki is tarike se hi read krega vo
        // react mein kuch rule hai uss tarike se hi hume kaam krna padhega

// 3.ab hum react ki hissab s element bnaynge
    // ye kuch steps hai ya rule maanlo uss hissab s likhna pdhega

const reactElement1=React.createElement(
    'a',
    {href:'http://google.com',target:'_blank'},
    'click to visit ',
    
)

// 4.ab koi variable bnaya ya bol skte phle hi executed kuch bhu toh usko is tarike se likh skte hai
const anotherElement="vansh clicked"
const reactElement2=React.createElement(
    'a',
    {href:'http://google.com',target:'_blank'},
    'click to visit ',
    anotherElement  //already executed function
)

createRoot(document.getElementById('root')).render(
 
    // <App />
    // <Myapp /> //object call ese krte hai
    reactElement1
 
)
