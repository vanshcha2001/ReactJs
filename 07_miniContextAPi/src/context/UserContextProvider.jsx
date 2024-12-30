// 2
import React, { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    return(
        // wrap kr denge yha saare children ko
        // aur data bhi lena hai toh uske liye useState lga dnge
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;