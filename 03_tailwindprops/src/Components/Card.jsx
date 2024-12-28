import React from 'react'

function Card({username,btnclick}) {
    // console.log("props:",props)
    //yha vo value ko pkdhega jo bhi humne App.jsx m di hogi

    console.log(username)
    console.log(btnclick)

  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">dfeihs</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
          <button>{btnclick}</button>
        </p>
      </div>
  )
}

export default Card