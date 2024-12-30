import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  // jo neche values li unko yha define krnge
  const [themeMode,setthemeMode]=useState('light')

  // ab jo darkTheme aur lightTheme hai ye toh bhai function hai ab iska ky kre?
  // Note------- jab bhi esa kuch ho ki function hai pr uski functionality define hi nhi ho toh,
  // same naam se yha bhi function bna do
  
  const darkTheme=()=>{
     setthemeMode("dark") 
  }
  const lightTheme=()=>{
    setthemeMode("light")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    // themeprovider mein wrap kr denge aur value le lnge
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
    );
}

export default App;
